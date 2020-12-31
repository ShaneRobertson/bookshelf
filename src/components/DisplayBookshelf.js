import React from "react";
import { Image } from "react-bootstrap";
import BookshelfCards from "./BookshelfCards";

const DisplayBooks = ({ bookShelf, setBookShelf }) => {
  return (
    <div className="displayBooks">
      {bookShelf.map((book, index) => {
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
        if (image.includes("https")) {
          httpsImage = image;
        } else {
          httpsImage = image.replace("http", "https");
        }

        return (
          <div className="cardContainer" key={index}>
            <Image id="bookCover" src={httpsImage} />
            <BookshelfCards
              setBookShelf={setBookShelf}
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

export default DisplayBooks;
