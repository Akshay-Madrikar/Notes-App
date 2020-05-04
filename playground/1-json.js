const fs = require('fs');

const book = {
    title: 'The Alchemist',
    author: 'Paulo Coelho'
};

//======== Write =====================/
//const bookJSON = JSON.stringify(book);
//fs.writeFileSync('1-json.json', bookJSON);
//====================================/

//======== READ =======================/
const bookBufer = fs.readFileSync('1-json.json');
const bookJSON = bookBufer.toString();
const bookData = JSON.parse(bookJSON);

console.log(bookData.title,":", bookData.author);
//=====================================/