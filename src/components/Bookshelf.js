import React, { useState, useEffect } from "react";
import { displayAuthorOnly, getBooks } from "../api";
//create get all authors, then just forEach over the return , that way we can just switch out bookshelf with the return
export default function Bookshelf({ bookshelf, setBookshelf }) {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getBooks()
      .then((response) => {
        setAuthors(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [bookshelf]);

  let authorList = [];
  authors.forEach((book) => {
    if (!authorList.includes(book.author)) {
      authorList.push(book.author);
    }
  });

  return (
    <>
      <h3>Your Authors</h3>
      <ul>
        <li
          id="homeAuthor"
          onClick={async () => {
            const allBooks = await getBooks();
            setBookshelf(allBooks);
          }}
        >
          All authors
        </li>
        {authorList.map((author, index) => {
          return (
            <li
              key={`authorKey-${index}`}
              id="homeAuthor"
              onClick={async () => {
                const authorOnly = await displayAuthorOnly(author);
                setBookshelf(authorOnly);
              }}
            >
              {author}
            </li>
          );
        })}
      </ul>
    </>
  );
}
