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
     await createBook('1234AA56','The Burning White', 'Brent Weeks', `In this stunning conclusion to the epic New York Timesbestselling Lightbringer series, kingdoms clash as Kip struggles to escape his family's shadow in order to protect the land and people he loves. Gavin Guile, once the most powerful man the world had ever seen, has been laid low. He's lost his magic, and now he is on a suicide mission. Failure will condemn the woman he loves. Success will condemn his entire empire. As the White King springs his great traps and the Chromeria itself is threatened by treason and siege, Kip Guile must gather his forces, rally his allies, and scramble to return for one impossible final stand. The long-awaited epic conclusion of Brent Weeks's New York Times bestselling Lightbringer series. Lightbringer The Black Prism The Blinding Knife The Broken Eye The Blood MirrorThe Burning White For more from Brent Weeks, check out: Night Angel The Way of Shadows Shadow's Edge Beyond the Shadows The Night Angel Trilogy: 10th Anniversary EditionNight Angel: The Complete Trilogy (omnibus) Perfect Shadow: A Night Angel Novella The Way of Shadows: The Graphic Novel`, 'http://books.google.com/books/content?id=YjB9DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 5, 77)
     await createBook( '1234BA56', 'The Blinding Knife', 'Brent Weeks', `The gripping sequel to New York Times bestselling fantasy epic The Black Prism from Brent Weeks. Gavin Guile is dying. He'd thought he had five years left--now he has less than one. With fifty thousand refugees, a bastard son, and an ex-fiancée who may have learned his darkest secret, Gavin has problems on every side. All magic in the world is running wild and threatens to destroy the Seven Satrapies. Worst of all, the old gods are being reborn, and their army of color wights is unstoppable. The only salvation may be the brother whose freedom and life Gavin stole sixteen years ago. Read the second book in Brent Weeks's blockbuster epic fantasy series that had Peter V. Brett saying, "Brent Weeks is so good, it's starting to tick me off!" Lightbringer The Black Prism The Blinding Knife The Broken Eye The Blood Mirror For more from Brent Weeks, check out: Night Angel The Way of Shadows Shadow's Edge Beyond the Shadows Night Angel: The Complete Trilogy (omnibus) Perfect Shadow: A Night Angel Novella (e-only) The Way of Shadows: The Graphic Novel`, "http://books.google.com/books/content?id=5dIdAaMF8WcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", 5, 57)
     console.log('Finished createing initial data!', )
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());