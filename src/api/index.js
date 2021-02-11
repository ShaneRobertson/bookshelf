import axios from 'axios';
//const axios = require('axios')


//-----GETTING ALL THE BOOKS FOR THE BOOKSHELF
export async function getBooks() {
  try {
    const {data} = await axios.get('/api/books')
//console.log('the data is: ', data)
    return data
  } catch (error) {
    throw error
  } 
}


//---CREATEING A NEW BOOKSHELF BOOK
export async function createNewBook(newVolumeInfo, newTitle, newAuthor, newDescription, newImage, newRating, newRating_count){
  if(!newDescription) {
    newDescription = "No description."
  }

  try {
    const {data} = await axios.post('/api/books', {
      volume_info: newVolumeInfo,
      title: newTitle,
      author: newAuthor,
      description: newDescription,
      image: newImage,
      rating: newRating,
      rating_count: newRating_count
    })

    console.log('this is the new book from the api: ', data)
    return data
  } catch (error) {
    throw error
  }
}

//--- GETTING ALL THE RESULTS FROM THE GOOGLE API
export async function getGoogleResults(query){
  let queryStr  = query.replace(' ', '+')
  try {

    const {data} = await axios.get(`api/google/${queryStr}`)
 //   console.log('From the google API', data)
    return data
  } catch (error) {
    throw error
  }
}


export async function deleteBook(book_id){
  try {
    console.log('is the id here in the api: ', book_id)
    const {data} = await axios.delete(`/api/books/${book_id}`)
    console.log('Deleted Response: ', data)
    return data
  } catch (error) {
    throw error
  }
}

export async function displayAuthorOnly(author){

try {
  const {data} =  await axios.get(`/api/books/${author}`)
  console.log("API: ", data)
  return data
} catch (error) {
  throw error
}
}
