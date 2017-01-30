/**
 * Created by moyu on 2017/1/30.
 */

var fork = require('child_process').fork;
var fs = require('fs');

fs.watch(__dirname, (type, filename) => {
    if(!filename.endsWith(".js")) {
        return;
    }
    serverProcess.kill('SIGINT')
    serverProcess = runServer()
})

var serverProcess = runServer()

function runServer() {
    return fork('./index.js', process.argv, {stdio: [0, 1, 2, 'ipc']})
}
