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
      DROP TABLE IF EXISTS books;
      `)
      console.log('Finished Dropping tables!')

    // build tables in correct order

    console.log('Creating tables')
    await client.query(`
      CREATE TABLE books (
        book_id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        description VARCHAR,
        image TEXT,
        rating INTEGER,
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
     await createBook('The Burning White', 'Brent Weeks', `In this stunning conclusion to the epic New York Timesbestselling Lightbringer series, kingdoms clash as Kip struggles to escape his family's shadow in order to protect the land and people he loves. Gavin Guile, once the most powerful man the world had ever seen, has been laid low. He's lost his magic, and now he is on a suicide mission. Failure will condemn the woman he loves. Success will condemn his entire empire. As the White King springs his great traps and the Chromeria itself is threatened by treason and siege, Kip Guile must gather his forces, rally his allies, and scramble to return for one impossible final stand. The long-awaited epic conclusion of Brent Weeks's New York Times bestselling Lightbringer series. Lightbringer The Black Prism The Blinding Knife The Broken Eye The Blood MirrorThe Burning White For more from Brent Weeks, check out: Night Angel The Way of Shadows Shadow's Edge Beyond the Shadows The Night Angel Trilogy: 10th Anniversary EditionNight Angel: The Complete Trilogy (omnibus) Perfect Shadow: A Night Angel Novella The Way of Shadows: The Graphic Novel`, 'http://books.google.com/books/content?id=YjB9DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 6, 77)
     await createBook('The Black Prism', 'Brent Weeks', `In a world where magic is tightly controlled, the most powerful man in history must choose between his kingdom and his son in the first book in the epic NYT bestselling Lightbringer series. Guile is the Prism. He is high priest and emperor, a man whose power, wit, and charm are all that preserves a tenuous peace. Yet Prisms never last, and Guile knows exactly how long he has left to live. When Guile discovers he has a son, born in a far kingdom after the war that put him in power, he must decide how much he's willing to pay to protect a secret that could tear his world apart. If you loved the action and adventure of the Night Angel trilogy, you will devour this incredible epic fantasy series by Brent Weeks. Lightbringer The Black Prism The Blinding Knife The Broken Eye The Blood Mirror The Burning White For more from Brent Weeks, check out: Night Angel The Way of Shadows Shadow's Edge Beyond the ShadowsPerfect Shadow: A Night Angel Novella Night Angel: The Complete Trilogy (omnibus)The Way of Shadows: The Graphic Novel`, 'http://books.google.com/books/content?id=dExIAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 4, 57)
     console.log('Finished createing initial data!', )
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());