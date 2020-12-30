import React from "react";
import { Image, Card, Button } from "react-bootstrap";
import {createNewBook} from '../api'
import SearchBookCards from "./SearchBookCards";

//

export default function DisplaySearchResults({ searchResults, bookShelf, setBookShelf  }) {
  return (
    <div className="displayResults">
      {searchResults.map((book) => {
        const { volumeInfo: {title, imageLinks, id, authors, averageRating, ratingsCount, description} } = book;
        return (
          <div className="cardContainer" key={id}>
            <Image id='bookCover' src={imageLinks.thumbnail} />
            <SearchBookCards title={title} authors={authors[0]} description={description} averageRating={averageRating} ratingsCount={ratingsCount} imageLinks={imageLinks.thumbnail} bookShelf={bookShelf} setBookShelf={setBookShelf} />
            {/* <Card className='bookCards'>
              <Card.Body>
                <Card.Title>{title} <Button onClick={async () => {
                  const newBook = await createNewBook(title, authors[0], description, imageLinks.thumbnail, averageRating, ratingsCount)
                  const bookshelfCopy = [...bookShelf]
                  bookshelfCopy.push(newBook)
                  setBookShelf(bookshelfCopy)
                }}>&#43; Bookshelf</Button></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {authors[0]}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  {averageRating} out of 5 - {ratingsCount} ratings.
                </Card.Subtitle>
                <Card.Text>
                  {description}
                </Card.Text>
                
              </Card.Body>
            </Card> */}
          </div>
        );
      })}
    </div>
  );
}
