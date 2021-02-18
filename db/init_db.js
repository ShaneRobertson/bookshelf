// code to build and initialize DB goes here
const {
  client,
  createBook
  // other db methods 
} = require('./index');

async function buildTables() {
  try {
    client.connect();

    // drop tables in correct order
      console.log('Dropping tables...')
      await client.query(`
      DROP TABLE IF EXISTS book_authors;
      DROP TABLE IF EXISTS books;
      `)
      console.log('Finished Dropping tables!')

    // build tables in correct order

    console.log('Creating tables')
    await client.query(`
      CREATE TABLE books (
        book_id SERIAL PRIMARY KEY,
        volume_info VARCHAR(255),
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        description TEXT,
        image TEXT,
        rating NUMERIC,
        rating_count INTEGER
      );
    `)

  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data
     console.log('Createing initial data..')
     await createBook('1QAHs3JSVnEC','The Black Prism', 'Brent Weeks', `In a world where magic is tightly controlled, the most powerful man in history must choose between his kingdom and his son in the first book in the epic NYT bestselling Lightbringer series. Guile is the Prism. He is high priest and emperor, a man whose power, wit, and charm are all that preserves a tenuous peace. Yet Prisms never last, and Guile knows exactly how long he has left to live. When Guile discovers he has a son, born in a far kingdom after the war that put him in power, he must decide how much he's willing to pay to protect a secret that could tear his world apart. If you loved the action and adventure of the Night Angel trilogy, you will devour this incredible epic fantasy series by Brent Weeks. Lightbringer The Black Prism The Blinding Knife The Broken Eye The Blood Mirror The Burning White For more from Brent Weeks, check out: Night Angel The Way of Shadows Shadow's Edge Beyond the ShadowsPerfect Shadow: A Night Angel Novella Night Angel: The Complete Trilogy (omnibus)The Way of Shadows: The Graphic Novel`, 'https://books.google.com/books/content?id=1QAHs3JSVnEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 4, 92)
     await createBook( 'QVn-CgAAQBAJ', 'The Way of Kings', 'Brandon Sanderson', `Introduces the world of Roshar through the experiences of a war-weary royal compelled by visions, a highborn youth condemned to military slavery, and a woman who is desperate to save her impoverished house.`, "https://books.google.com/books/content?id=QVn-CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", 4, 123)
     console.log('Finished createing initial data!', )
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());