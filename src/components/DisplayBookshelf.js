import React from "react";
import {Image} from "react-bootstrap";
import BookCards from "./BookCards";

const DisplayBooks = ({ bookShelf }) => {

  return (
    <div className="displayBooks">
      {bookShelf.map((book, index) => {
        const {
          title,
          author,
          description,
          image,
          rating,
          rating_count,
        } = book;

        let httpsImage = image.replace('http', 'https')
        console.log(httpsImage)

        return (
          <div className="cardContainer" key={index}>
            <Image id='bookCover' src={httpsImage} />
            <BookCards
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
