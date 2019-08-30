//module.exports = filePath => path.extname('README.md') === ".md";

const fs = require('fs');
const process = require('process');
const path = require('path');
const https = require('https');
const chalk = require('chalk');


// 1.- identifying path
// to-do: agregar opción para archivos
// to-do: probar con módulo readline
let pathToCheck = process.argv[2];
let consoleLine = process.argv;

let activateValidate = consoleLine.includes('--validate') ? console.log('sípumita') : console.log('nopancho');
let activateStats = consoleLine.includes('--stats') ? console.log('síp') : console.log('nop');
let checkExtName = consoleLine.includes((path.extname() === '.md');


let identifyMD = path.extname(pathToCheck) === ".md";



// 2.- identifying if there is an .md file
    // to-do CAMBIAR A TERNARIO, ESPECIFICAR DEVOLUCIÓN DE ERROR PARA ARCHIVOS NO .MD
//let identifyMD = path.extname(pathToCheck) === ".md" ? readFile() : messageErr;
// console.log(identifyMD);

//to-do agregar función para que solo los archivos -md pasen a readFile

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
        console.log(`Found url ${listOfUrls[0]} in the file ${pathToCheck}`);
      };
});



/*
function mdLinksOptions(rawArgs) {
  const args = arg(
    {
      '--validate': Boolean,
      '--stats': Boolean,
    },
    {
      argv: rawArgs.slice(3),
    }
  );
return {
  validateLinks: args['--validate'] || true,
  statsOfLinksArray:  args['--stats'] || true,
};
}
*/
