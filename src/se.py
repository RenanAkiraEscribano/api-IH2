from experta import *
from datetime import datetime
import requests 

urlSE = f'http://192.168.0.120:3001/api/sistemaEspecialista'
urlReforma = f'http://192.168.0.120:3001/api/reforma'
urlGR = f'http://192.168.0.120:3001/api/gasesReforma'

#Dados da Reforma
responseReforma = requests.get(urlReforma)
dataReforma = responseReforma.json()

#Dados da Gases Reforma
responseGR = requests.get(urlGR)
dataGR = responseGR.json()

def postSE(historico, status, acao):
    requests.post(urlSE, {'historico':historico, 'status_SE':status, 'acao_SE':acao})

agora = datetime.now()
historico = str(agora).split('.')[0] + ' Alerta: '
acao_SE = 0

class SistemaIH2(Fact):
    pass

class IH2(Fact):
    pass

class Prototipo(KnowledgeEngine):

    @Rule(SistemaIH2(mdv001_3=MATCH.mdv001_3),
          TEST(lambda mdv001_3: mdv001_3 < 10 or mdv001_3 > 40))
    def alertaMDV001_3(self):
        print('mdv001_3 < 10 or mdv001_3 > 40')
        global historico
        global acao_SE
        historico = historico + 'Vazão para reforma fora da faixa ideal / '
        acao_SE = 2

    @Rule(SistemaIH2(sdt002=MATCH.sdt002),
        TEST(lambda sdt002: sdt002 < 784))
    def alertaDesligarSDT002(self):
        print('sdt002 < 784')
        global historico
        global acao_SE
        historico = historico + 'Temperatura do forno muito baixa / '
        acao_SE = 2

    @Rule(SistemaIH2(sdt002=MATCH.sdt002),
          TEST(lambda sdt002: sdt002 >= 816))
    def alertaSDT002(self):
        global historico
        global acao_SE
        historico = historico + 'Temperatura forno maior que 816° / '
        if acao_SE < 2:
            acao_SE = 1

    @Rule(SistemaIH2(sdt002=MATCH.sdt002),
          TEST(lambda sdt002: sdt002 >= 840))
    def alertaDesligarTaPegandoFogo(self):
        global historico
        global acao_SE
        historico = historico + 'Está pegando fogo / '
        acao_SE = 2

    @Rule(SistemaIH2(sdt003=MATCH.sdt003),
          TEST(lambda sdt003: sdt003 < 637))
    def alertaDesligarSDT003(self):
        global historico
        global acao_SE
        historico = historico + 'Baixa Temperatura pré-forno / '
        acao_SE = 2

    @Rule(SistemaIH2(sdp002=MATCH.sdp002),
        TEST(lambda sdp002: sdp002 >= 3 and sdp002 < 4))
    def alertaSDP002(self):
        global historico
        global acao_SE
        historico = historico + 'Pressão alta na reforma / '
        if acao_SE < 2:
            acao_SE = 1

    @Rule(SistemaIH2(sdp002=MATCH.sdp002),
          TEST(lambda sdp002: sdp002 >= 4))
    def alertaDesligarSDP002(self):
        global historico
        global acao_SE
        historico = historico + 'Pressão na reforma maior que 4 bar / '
        acao_SE = 2
        
    @Rule(SistemaIH2(sdu001_1=MATCH.sdu001_1),
          TEST(lambda sdu001_1: sdu001_1 >= 0.2))
    def alertaSDU001_1(self):
        global historico
        global acao_SE
        historico = historico + 'Umidade na reforma / '
        if acao_SE < 2:
            acao_SE = 1

    @Rule(SistemaIH2(sdu002_2=MATCH.sdu002_2),
          TEST(lambda sdu002_2: sdu002_2 >= 0.2))
    def alertaSDU002_2(self):
        global historico
        global acao_SE
        historico = historico + 'Umidade no Pulmãozinho / '
        if acao_SE < 2:
            acao_SE = 1

    @Rule(SistemaIH2(co_GR=MATCH.co_GR),
          TEST(lambda co_GR: co_GR >= 58))
    def alertaCO(self):
        print('co_GR >= 58')
        global historico
        global acao_SE
        historico = historico + 'CO maior que 58% / '
        acao_SE = 2

p = Prototipo()
p.reset()
p.declare(SistemaIH2(mdv001_3=dataReforma[0]['mdv001_3']), SistemaIH2(sdt002=dataReforma[0]['sdt002']), SistemaIH2(sdt003=dataReforma[0]['sdt003']), SistemaIH2(sdp002=dataReforma[0]['sdp002']), SistemaIH2(co_GR=dataGR[0]['co_GR']))
p.run()

postSE(historico, 1, acao_SE)