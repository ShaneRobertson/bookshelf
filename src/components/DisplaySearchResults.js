import React from "react";
import { Image } from "react-bootstrap";

import no_image from "../no_image.jpg";
import SearchBookCards from "./SearchBookCards";

//

export default function DisplaySearchResults({
  searchResults,
  bookshelf,
  setBookshelf
}) {



  return (
    <div className="displayResults">
      {Array.isArray(searchResults) ? (
        searchResults.map((book) => {
          let {
            volumeInfo: {
              title,
              imageLinks,
              volume_info,
              authors,
              averageRating,
              ratingsCount,
              description,
            },
          } = book;
          const { id } = book;
        

          if (!description) {
            description = "No description provided...";
          }
          if (!authors) {
            authors = [""];
          }

          // corrects Mixed Content warning
          let httpsImage;
          if (imageLinks) {
            if (imageLinks.thumbnail.includes("https")) {
              httpsImage = imageLinks.thumbnail;
            } else {
              httpsImage = imageLinks.thumbnail.replace("http", "https");
            }
          }


          return (
            <div className="cardContainer" key={id}>
              {httpsImage ? (
                <Image id="bookCover" src={httpsImage} />
              ) : (
                <Image id="bookCover" src={no_image} />
              )}
              <SearchBookCards
                id={id}
                volume_info={volume_info}
                title={title}
                authors={authors[0]}
                description={description}
                averageRating={averageRating}
                ratingsCount={ratingsCount}
                httpsImage={httpsImage}
                bookshelf={bookshelf}
                setBookshelf={setBookshelf}
              />
            </div>
          );
        })
      ) : (
        <div className="noResults">
          Guess they haven't written the book on that one yet! Try searching for
          something else.
        </div>
      )}
    </div>
  );
}
