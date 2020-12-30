import React, {useState} from 'react'
import {createNewBook} from '../api'
import { Card, Button } from "react-bootstrap";

export default function SearchBookCards({title, authors, imageLinks, description, averageRating, ratingsCount, bookShelf, setBookShelf}) {

    const [showText, setShowText] = useState(true);
    let truncDesc = showText ? description.slice(0, 250) : description

    return (
        <Card className="bookCards">
        <Card.Body>
          <Card.Title>{title}<Button onClick={async () => {
                  const newBook = await createNewBook(title, authors, description, imageLinks, averageRating, ratingsCount)
                  const bookshelfCopy = [...bookShelf]
                  bookshelfCopy.push(newBook)
                  setBookShelf(bookshelfCopy)
                }}>&#43; Bookshelf</Button></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{authors}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            {averageRating} out of 5 - {ratingsCount} ratings.
          </Card.Subtitle>
          <Card.Text>
            {truncDesc}
            <span id='showText'
              onClick={() => {
                setShowText(!showText);
              }}
            >
              ...Show {showText ? "more" : "less"}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
