import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { deleteBook, getBooks } from "../api";
import { Trash } from "react-bootstrap-icons";
import BuyLink from './BuyLink.js'

export default function BookCards({
  setBookshelf,
  book_id,
  title,
  author,
  description,
  rating,
  rating_count,
  buy_link,
}) {
  const [showText, setShowText] = useState(true);
  let truncDesc = showText ? description.slice(0, 250) : description;
  return (
    <Card className="bookCards">
      <Card.Body>
        <Card.Title>
          {title}{" "}
          {
            (buy_link === "Not available for purchase." ? (
             ''
            ) : (
              <BuyLink buyLink={buy_link} />
            ))
          }
          <Button
            id="deleteBtn"
            variant="danger"
            onClick={async () => {
              await deleteBook(book_id);
              const activeBooks = await getBooks();
              localStorage.setItem(
                "bookshelfBooks",
                JSON.stringify(activeBooks)
              );
              setBookshelf(activeBooks);
            }}
          >
            <Trash />
          </Button>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
        {rating ? (
          <Card.Subtitle className="mb-2 text-muted">
            {rating} out of 5 - {rating_count} ratings.
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
