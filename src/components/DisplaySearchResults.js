import React from "react";
import { Image } from "react-bootstrap";

import SearchBookCards from "./SearchBookCards";

//

export default function DisplaySearchResults({ searchResults, bookShelf, setBookShelf  }) {
  return (
    <div className="displayResults">
      {searchResults.map((book) => {
        let { volumeInfo: {title, imageLinks, id, authors, averageRating, ratingsCount, description} } = book;
     
      if(!description){
          description = "No description provided..."
      }
      if(!authors){
          authors = ['']
      }

      // corrects Mixed Content warning
      let httpsImage;      
      if(imageLinks.thumbnail.includes('https')){
        httpsImage = imageLinks.thumbnail
      } else {
        httpsImage = imageLinks.thumbnail.replace('http', 'https') 
      } 

        return (
          <div className="cardContainer" key={id}>
            <Image id='bookCover' src={httpsImage}  /* src={imageLinks.thumbnail} *//>
            <SearchBookCards title={title} authors={authors[0]} description={description} averageRating={averageRating} ratingsCount={ratingsCount} httpsImage={httpsImage} bookShelf={bookShelf} setBookShelf={setBookShelf} />
          </div>
        );
      })}
    </div>
  );
}
