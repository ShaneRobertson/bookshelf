import axios from "axios";
//const axios = require('axios')

//-----GETTING ALL THE BOOKS FOR THE BOOKSHELF
export async function getBooks() {
  try {
    const { data } = await axios.get("/api/books");
    return data;
  } catch (error) {
    throw error;
  }
}

//---CREATEING A NEW BOOKSHELF BOOK
export async function createNewBook(
  newVolumeInfo,
  newTitle,
  newAuthor,
  newDescription,
  newImage,
  newRating,
  newRating_count,
  newBuyLink
) {
  if (!newDescription) {
    newDescription = "No description.";
  }
  if(!newBuyLink){
    newBuyLink = 'Not available for purchase.'
  }

  try {
    const { data } = await axios.post("/api/books", {
      volume_info: newVolumeInfo,
      title: newTitle,
      author: newAuthor,
      description: newDescription,
      image: newImage,
      rating: newRating,
      rating_count: newRating_count,
      buyLink: newBuyLink
    });
    return data;
  } catch (error) {
    throw error;
  }
}

//--- GETTING ALL THE RESULTS FROM THE GOOGLE API
export async function getGoogleResults(query) {
  let queryStr = query.replace(" ", "+");
  try {
    const { data } = await axios.get(`api/google/${queryStr}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteBook(book_id) {
  try {
    const { data } = await axios.delete(`/api/books/${book_id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function displayAuthorOnly(author) {
  try {
    const { data } = await axios.get(`/api/books/${author}`);
    return data;
  } catch (error) {
    throw error;
  }
}
