/*const markdownIt = require('markdown-it'),
    md = new markdownIt();

var result = md.render(pathToCheck);
console.log(result);
//console.log("my first");*/

const fs = require('fs');
const process = require('process');
const path = require('path');
const https = require('https');

//const markdownIt = require();

// 1.- identifying path

// to-do: agregar opción para archivos
let pathToCheck = ((process.argv).slice(2)).toString();
console.log(pathToCheck);


// 2.- identifying if there is an .md file
    // to-do CAMBIAR A TERNARIO, ESPECIFICAR DEVOLUCIÓN DE ERROR PARA ARCHIVOS NO .MD
let identifyMD = path.extname(pathToCheck) === ".md";
 console.log(identifyMD);

//to-do agregar función para que solo los archivos -md pasen a readFile

// 3.- Reading a .md file and finding links

    //3.1.- Declaring functions that will be needed in


const urlRegExp = /https?:.*(?=\u0029)/g;
//let collectorOfUrls = [];

const requestUrl = https.request('https://duckduckgo.com', (res) => {
  console.log('statusCode:', res.statusCode);
});

    //3.2.- Reading .md files in pathToCheck

/*let url = 'https://nodejs.org';
const readurl= fs.createReadStream(url, 'utf8',  { start: 90, end: 99 }, (err, data) => {
  if (err) throw err;
  console.log(data);
});

const che =
https.get(pathToCheck, (res) => {
  ('statusCode:', res.statusCode);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
}). on('error', (e) => {
  console.error(e);
});

const readFile = fs.readFile(pathToCheck, 'utf8', (err, data) => {
  if (err) throw err;

    // 3.1.- Iterating on .md file(s) to find links
 let urlsInMd;
      while ((listOfUrls = urlRegExp.exec(data)) !== null) {
      //  collectorOfUrls += listOfUrls[0] + " ";
      /*let reqHttps = https.request(listOfUrls, (res) => {
        console.log(res.statusCode);
      });
      console.log(`Found url ${listOfUrls[0]} in the path ${pathToCheck}`);
    };
});
*/
