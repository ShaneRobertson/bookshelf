import React, {useState} from 'react'
import {createNewBook} from '../api'
import { Card, Button } from "react-bootstrap";

export default function SearchBookCards({title, authors, httpsImage, description, averageRating, ratingsCount, bookShelf, setBookShelf}) {

    const [showText, setShowText] = useState(true);
    const [showButton, setShowButton] = useState(true)
   
    let truncDesc = showText ? description.slice(0, 240) : description

    return (
        <Card className="bookCards" >
        <Card.Body>
          <Card.Title className='cardTitle'>{title}{showButton ? <Button id='addBtn' onClick={async () => {
                  const newBook = await createNewBook(title, authors, description, httpsImage, averageRating, ratingsCount)
                  const bookshelfCopy = [...bookShelf]
                  bookshelfCopy.push(newBook)
                  setBookShelf(bookshelfCopy)
                  setShowButton(false)

                }}>&#43; Bookshelf</Button> : <Button id='addBtn' style={{backgroundColor: 'green'}} disabled>&#10003; Added</Button>}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{authors}</Card.Subtitle>
         {averageRating ?  <Card.Subtitle className="mb-2 text-muted">
            {averageRating} out of 5 - {ratingsCount} ratings.
          </Card.Subtitle> : <Card.Subtitle className="mb-2 text-muted">No Ratings</Card.Subtitle>}
          <Card.Text>
            {truncDesc} {truncDesc === "No description provided..." || truncDesc.length < 240 ? '' :  
            <span id='showText'
              onClick={() => {
                setShowText(!showText);
              }}
            >
              ...Show {showText ? "more" : "less"}
            </span>}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
