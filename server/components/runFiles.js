const { exec, spawn } = require("child_process");

const cppFile = './files/Hello.cpp';

const input = [4, 5, 6];
const delimiter = ',';
// console.log(inputString);

const Runcpp = () => {
    return new Promise((resolve, reject) => {
        exec(`g++ ${cppFile} -o a`, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }
            const child = spawn("a.exe"); //where a is the exe file generated on compiling the code.
            child.stdin.write(inputString);
            child.stdin.end();
            child.stdout.on("data", (data) => {
                console.log(`child stdout:\n${data}`);
            });
        })
    })
}

const Runpython = (command,args,options,input) => {
    return new Promise((resolve,reject) => {
        const childProcess = spawn(command, args, options);

        let stdoutData = '';
        let stderrData = '';

        childProcess.stdin.write(input);
        childProcess.stdin.end();

        childProcess.stdout.on('data', (data) => {
            stdoutData += data.toString();
        });

        childProcess.stderr.on('data', (data) => {
            stderrData += data.toString();
        });

        childProcess.on('close', (code) => {
            if(code == 0){
                resolve(stdoutData);
            } else {
                const error = new Error(`Command failed with code ${code}`);
                error.stdout = stdoutData;
                error.stderr = stderrData;
                reject(error);
            }
        });
    });
}

const runCpp = async () => {
    try {
        const output = await Runcpp();
        // const output = await ececute("a.exe");
        console.log(output);
    } catch (err) {
        console.log(err);
    }
}

const runPython = async (req, res) => {
    const command = 'python';
    const pythonFile = ['./files/DiseasePredictor.py'];
    const pyinp = req.body;
    console.log(pyinp);
    const inputString = pyinp.join(delimiter);
    try {
        const output = await Runpython(command, pythonFile, undefined, inputString);
        console.log(output);
        res.send(output);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

module.exports = { runCpp, runPython };

