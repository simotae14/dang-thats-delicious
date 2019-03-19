const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const tae = {
    name: 'Simone',
    age: 34,
    cool: true
  };
  //res.send('Hey! It works!');
  res.json(req.query);
});

router.get('/reverse/:name', (req, res) => {
  // create the reverse of the string
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
