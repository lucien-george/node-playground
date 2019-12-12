const readline = require('readline');
const fs = require('fs');
const readInterface = readline.createInterface({
    input: fs.createReadStream('file.txt'),
    console: false
});
const arrayGlobal = [];
readInterface.on('line', (line) => {
    arrayGlobal.push(line);
}).on('close', () => {
  console.log(arrayGlobal);
});
