const router = require('express').Router();
const {v4: uuidv4} = require('uuid');
const notes = require('../../db/db.json');
const createNewNote = require('../../lib/notes');

router.get('/notes', (req, res) => {
  let results = notes;
  console.log(results);

  res.json(results);
});

router.post('/notes', (req, res) => {
  console.log(req.body);
  // set id to a unique string using the UUID package
  req.body.id = uuidv4();

  // add new note to notes array and write to db.json file
  const note = createNewNote(req.body, notes);
  res.json(note);
});

module.exports = router;