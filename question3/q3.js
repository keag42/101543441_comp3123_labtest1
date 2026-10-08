const fs = require('fs');
const path = require('path');

const createLogFiles = (data) => {
    if(fs.existsSync(path.join(__dirname, 'logs')) === false){
        console.log("Log directory doesnt exist");
        fs.mkdirSync(path.join(__dirname, 'logs'))
        console.log("Log Directory Created")
    }

    for (let i = 0; i <= 10; i++) {
        data += "\n"
        fs.appendFileSync(path.join(__dirname, `logs/log${i}.txt`), data, (err) => {
            if(err){throw err}
        })
        console.log(`created file: log${i}.txt`);
    }
}

const deleteLogFiles = () => {
    const logsDir = path.join(__dirname, 'logs')
    if(fs.existsSync(logsDir) === true){
        fs.readdir(logsDir, (err, files) => {
            if(err){throw err}
            let remaining = files.length
            const removeDir = () => {
                fs.rmSync(logsDir, { recursive: true, force: true });
                console.log("deleted logs directory");
            }
            if(remaining === 0){removeDir()}

            files.forEach(file => {
                console.log(`deleted file: ${file}`);
                fs.unlink(path.join(logsDir, file), (err) => {
                    if(err){throw err}
                    remaining--
                    if(remaining === 0){removeDir()}
                })
            });
        });
    }
}

createLogFiles("Hello world")
console.log("")
deleteLogFiles()