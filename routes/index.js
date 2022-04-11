var express = require('express');
var router = express.Router();
const knex = require('../lib/db');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const users = await knex('users').select('*');
  res.render('index', { title: 'Express', users: users });
});

module.exports = router;
