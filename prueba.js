//

const markdownIt = require('markdown-it'),
    md = new markdownIt();

var result = md.render(pathToCheck);
console.log(result);
//console.log("my first");
