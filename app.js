//const fs = require('fs');
//fs.appendFileSync('notes.txt','. I can code');

//======= MODULES ====================/
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const note = require('./notes');
// const removeNote = require('./notes');
// const Lis = require('./notes');
//====================================/

//=========== Validator module ==================/
// console.log(validator.isEmail('asdasdasd@g.com'));
// console.log(validator.isURL('http://asd.com'));
//=============================================/

//=========== Chalk module ==================/
// console.log(chalk.bold.green('Success!'));
// console.log(chalk.bold.red('Error!'));
//=========================================/

//=========== Command Line Arguments ============/
// const command = process.argv[2];
// if( command === 'add' ){
//     console.log('Adding notes!!!');
// }

yargs.command({
    command: 'add',
    description: 'Add a new note',
    handler: (argv) => {
        note.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    description: 'Remove a new note',
    handler: (argv) => {
        note.removeNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    description: 'Listing all notes',
    handler: () => {
        note.listNotes();
    }
});

yargs.command({
    command: 'read',
    description: 'Read note',
    handler: (argv) => {
        note.readNote(argv.title)
    }
});

yargs.parse();
//===============================================/