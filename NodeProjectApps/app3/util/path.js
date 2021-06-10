const path = require('path');
const dirNameOfMainModule = path.dirname(process.mainModule.filename);//ie dirname of app.js

module.exports = dirNameOfMainModule;
