import axios from 'axios';




export async function getBooks() {
  try {
    const {data} = await axios.get('/api/books')

    return data
  } catch (error) {
    throw error
  } 
}

export async function createNewBook(newTitle, newAuthor, newDescription, newImage, newRating, newRating_count){
  try {
    const {data} = await axios.post('/api/books', {
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

export async function getGoogleResults(query){
  let queryStr  = query.replace(' ', '+')
  try {

    const {data} = await axios.get(`api/google/${queryStr}`)
    console.log('From the google API', data)
    return data
  } catch (error) {
    throw error
  }
}
