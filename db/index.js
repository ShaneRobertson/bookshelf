require("dotenv").config();

// Connect to DB
const { Client } = require("pg");
const { DB_USER, DB_PASS } = process.env;
const DB_NAME = `${DB_USER}:${DB_PASS}@localhost:5432/bookshelf`;
const DB_URL = process.env.DATABASE_URL || `postgres://${DB_NAME}`;
const client = new Client(DB_URL);

// database methods
async function getAllBooks() {
  try {
    const { rows } = await client.query(`
      SELECT * FROM books;
    `);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function createBook(
  volume_info,
  title,
  author,
  description,
  image,
  rating,
  rating_count,
  buy_link
) {
  try {
    const {
      rows: [book],
    } = await client.query(
      `
      INSERT INTO books(volume_info, title, author, description, image, rating, rating_count, buy_link)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
    `,
      [volume_info, title, author, description, image, rating, rating_count, buy_link]
    );

    return book;
  } catch (error) {
    throw error; 
  }
}

async function deleteBook(id){
  try {
    const {rows} = await client.query(`
      DELETE FROM books
      WHERE book_id=$1
      RETURNING *;
    `, [id])
    return rows
  } catch (error) {
    throw error
  }
}

async function getBooksByAuthor(authorName){
  try {
    const {rows} = await client.query(`
      SELECT * FROM books
      WHERE author=$1;
    `, [authorName])
    return rows
  } catch (error) {
    throw error
  }
}

// export
module.exports = {
  client,
  getAllBooks,
  createBook,
 deleteBook,
 getBooksByAuthor
  // db methods
};
