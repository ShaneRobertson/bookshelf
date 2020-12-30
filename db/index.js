require('dotenv').config()

// Connect to DB
const { Client } = require('pg');
const {DB_USER, DB_PASS} = process.env
const DB_NAME = `${DB_USER}:${DB_PASS}@localhost:5432/bookshelf`;
const DB_URL = process.env.DATABASE_URL || `postgres://${ DB_NAME }`;
const client = new Client(DB_URL);

// database methods

async function createBook(title, author, description, image, rating, rating_count){
  try {
    const {rows: [book]} = await client.query(`
      INSERT INTO books(title, author, description, image, rating, rating_count)
      VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `, [title, author, description, image, rating, rating_count])
    console.log("This is the books entry: ", book)
    return book
  } catch (error){
    throw error
  }
}


 async function getAllBooks(){
try {
  const { rows } = await client.query(`
    SELECT * FROM books;
  `)
   return rows
} catch (error){
  throw error
}
 }
// export
module.exports = {
  client,
  createBook,
  getAllBooks
  // db methods
}