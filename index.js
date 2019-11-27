//module.exports = filePath => path.extname('README.md') === ".md";

const fs = require('fs');
const process = require('process');
const path = require('path');
const https = require('https');
const util =  require('util');
const chalk = require('chalk');


// 1.- identifying path
// to-do: agregar opción para archivos

let pathToCheck = process.argv[2];

let consoleLine = process.argv;

const options = {}
  let activateValidate = consoleLine.includes('--validate') ? options.activateValidate = true : options.activateValidate = false;
  let activateStats = consoleLine.includes('--stats') ? options.activateStats = true : options.activateStats = false;

console.log(options.activateStats);
//let checkExtName = consoleLine.includes((path.extname() === '.md');

// 2.- identifying if there is an .md file
    // to-do CAMBIAR A TERNARIO, ESPECIFICAR DEVOLUCIÓN DE ERROR PARA ARCHIVOS NO .MD
let identifyMD = path.extname(pathToCheck) === ".md";
console.log(identifyMD);


// 3.- Reading a .md file and finding links

    //3.1.- Declaring functions that will be needed in
const urlRegExp = /https?:.*(?=\u0029)/g;
let collectorOfUrls = [];


    //3.2.- Reading .md files in pathToCheck

const readFile = fs.readFile(pathToCheck, 'utf8', (err, data) => {
  if (err) throw err;
    // 3.1.- Iterating on .md file(s) to find links
  let urlsInMd = [];
      while ((listOfUrls = urlRegExp.exec(data)) !== null) {
        collectorOfUrls += listOfUrls[0] + " ";
        let ss = console.log((chalk.magentaBright`${listOfUrls[0]}`) + (chalk.cyanBright ` in file `) + `${pathToCheck}`);
  };
});


/*
let req = new Promise((resolve, reject) => {
      const restt = https.get(url, fun+
});
*/
/*

let promisifyGet = util.promisify(https.get);
let reqUrl = https.get(url, (res) => {
  console.log(res.statusCode);
//let status = (res.statusText).toString();
    });

reqUrl.on('error', (e) => {
  console.error(e);
});

console.log(reqUrl.statusCode);
*/
