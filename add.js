const fs = require('fs')

const add = function(note,oldNote){
    //parse oldnote from string to object of arrays
    const newNote = JSON.parse(oldNote)
    //add new note to note.txt again
    newNote.push(note)
    //save new note to note.txt again
    fs.writeFileSync('note.txt',JSON.stringify(newNote))
}
module.exports = add 