import React, { useState, useEffect } from "react";
import DisplayBookshelf from "./DisplayBookshelf";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";
import SearchBooksForm from "./SearchBooksForm";
import Bookshelf from "./Bookshelf";
import About from "./About";
import DisplaySearchResults from "./DisplaySearchResults";
import SearchMessage from "./SearchMessage";
import { getBooks } from "../api";

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    getBooks()
      .then((response) => {
        localStorage.setItem("bookshelfBooks", JSON.stringify(response))
        setBookshelf(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <div className="rightSide">
        <NavBar />

        <Switch>
          <Route path="/search">
            <SearchBooksForm setSearchResults={setSearchResults} bookshelf={bookshelf}/>
          </Route>

          <Route path="/">
           <Bookshelf bookshelf={bookshelf} setBookshelf={setBookshelf} /> 
         
          </Route>
        </Switch>
      </div>
      <Switch>
        <Route path="/search">
          {searchResults ? (
            <DisplaySearchResults
              searchResults={searchResults}
              bookshelf={bookshelf}
              setBookshelf={setBookshelf}
              setSearchResults={setSearchResults}
            />
          ) : (
            <SearchMessage />
          )}
        </Route>

        <Route path="/about">
            <About />
          </Route>

        <Route path="/">
          <DisplayBookshelf bookshelf={bookshelf} setBookshelf={setBookshelf} />
     
        </Route>
      </Switch>
    </div>
  );
};

export default App;
