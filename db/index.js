require('dotenv').config()

// Connect to DB
const { Client } = require('pg');
const {DB_USER, DB_PASS} = process.env
const DB_NAME = `${DB_USER}:${DB_PASS}ganon3422@localhost:5432/bookshelf`;
const DB_URL = process.env.DATABASE_URL || `postgres://${ DB_NAME }`;
const client = new Client(DB_URL);

// database methods

// export
module.exports = {
  client,
  // db methods
}