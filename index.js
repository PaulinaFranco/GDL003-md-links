//module.exports = filePath => path.extname('README.md') === ".md";

const fs = require('fs');
const process = require('process');
const path = require('path');
//const markdownIt = require();

// 1.- identifying path

// to-do: agregar opción para archivos
let pathToCheck = ((process.argv).slice(2)).toString();
console.log(pathToCheck);


/
