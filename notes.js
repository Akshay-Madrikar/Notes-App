const fs = require('fs');

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(error) {
        return [];
    }
}

//=========== ADD NOTE =========================/
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.find((note) => note.title === title)

    if(!duplicateNotes){
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log('New note added')
    } else {
        console.log('Sorry, Note title taken')
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
//===============================================/

//============ REMOVE NOTE ======================/
const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter( note =>  note.title !== title );
    saveNotes(notesToKeep);
}
//===============================================/

//============ LIST NOTES =======================/
const listNotes = () => {   
    const notes = loadNotes();
    notes.forEach( note => {
        console.log( note.title )
    } )
}
//===============================================/

//============ READ NOTE =======================/
const readNote = (title) => {
    const notes = loadNotes()

    const noteToRead = notes.find( note => note.title === title );
    if(noteToRead) {
        console.log(noteToRead.body);
    } else {
        console.log('No such note!');
    }
};
//===============================================/

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};