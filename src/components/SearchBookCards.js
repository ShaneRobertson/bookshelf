import React, { useState } from "react";
import { createNewBook } from "../api";
import { Card, Button } from "react-bootstrap";

export default function SearchBookCards({
  id,
  title,
  authors,
  httpsImage,
  description,
  averageRating,
  ratingsCount,
  bookshelf,
  setBookshelf,
}) {

  const [showText, setShowText] = useState(true);

  let truncDesc = showText ? description.slice(0, 240) : description;
  let list = JSON.parse(localStorage.getItem('bookshelfBooks')).filter((book) => book.volume_info === id)

  return (
    <Card className="bookCards">
      <Card.Body>
        <Card.Title className="cardTitle">
          {title}
          {list.length > 0 ? (
            <Button id="addBtn" style={{ backgroundColor: "green" }} disabled>
            &#10003; Added
          </Button>
          ): (
            <Button
              id="addBtn"
              onClick={async () => {
                const newBook = await createNewBook(
                  id,
                  title,
                  authors,
                  description,
                  httpsImage,
                  averageRating,
                  ratingsCount
                );
                const bookshelfCopy = [...bookshelf];
                bookshelfCopy.push(newBook);
                localStorage.setItem("bookshelfBooks", JSON.stringify(bookshelfCopy))
                setBookshelf(bookshelfCopy);
              }}
            >
              &#43; Bookshelf
            </Button>
          )}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{authors}</Card.Subtitle>
        {averageRating ? (
          <Card.Subtitle className="mb-2 text-muted">
            {averageRating} out of 5 - {ratingsCount} ratings.
          </Card.Subtitle>
        ) : (
          <Card.Subtitle className="mb-2 text-muted">No Ratings</Card.Subtitle>
        )}
        <Card.Text>
          {truncDesc}{" "}
          {truncDesc === "No description provided..." ||
          truncDesc.length < 240 ? (
            ""
          ) : (
            <span
              id="showText"
              onClick={() => {
                setShowText(!showText);
              }}
            >
              ...Show {showText ? "more" : "less"}
            </span>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
