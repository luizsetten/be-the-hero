const knex = require('knex');
const confiuration = require('../../knexfile');

const connection = knex(confiuration.development);

module.exports = connection;