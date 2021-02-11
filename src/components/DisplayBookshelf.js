import React from "react";
import { Image } from "react-bootstrap";
import no_image from '../no_image.jpg'
import BookshelfCards from "./BookshelfCards";

const DisplayBookshelf = ({ bookshelf, setBookshelf }) => {
  return (
    <div className="displayBooks">
      {bookshelf.map((book, index) => {
        const {
          book_id,
          title,
          author,
          description,
          image,
          rating,
          rating_count,
        } = book;

        // corrects Mixed Content warning
        let httpsImage;
        if(image){
          if (image.includes("https")) {
            httpsImage = image;
          } else {
            httpsImage = image.replace("http", "https");
          }
        }
      

        return (
          <div className="cardContainer" key={index}>
              {httpsImage ?  <Image id='bookCover' src={httpsImage} /> : <Image id='bookCover' src={no_image} />}
            <BookshelfCards
              setBookshelf={setBookshelf}
              book_id={book_id}
              title={title}
              author={author}
              description={description}
              rating={rating}
              rating_count={rating_count}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayBookshelf;
