const fs = require('fs');

// const book = {
//   title: 'The power of habits',
//   author: 'some author'
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const data = fs.readFileSync('1-json.json').toString();
const parsedData = JSON.parse(data);
parsedData.name = 'Lucien';
parsedData.age = 23;
fs.writeFileSync('1-json.json', JSON.stringify(parsedData));
