const { spawn } = require('child_process');

const pythonProcess = spawn('python', ["./se.py"]);

/*
module.exports = {
    ativaSE: () => {
        pythonProcess.stdout.on('data', (data) => {
            //console.log(`${data}`)
            return data
        })},
}*/


const ativaSE = () =>{
    pythonProcess.stdout.on('data', (data) => {
        console.log(`${data}`)
        //return data
    });
}

ativaSE()
//export default ativaSE;