const fs = require('fs');
const path = require('path');

function createNewNote(body, notes) {
  const newNote = body;
  notes.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes, null, 2)
  )

  // return finished code to post route for response
  return newNote;
}

module.exports = createNewNote;