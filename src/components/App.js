import React, { useState, useEffect } from "react";
import DisplayBookshelf from "./DisplayBookshelf";
import AddBook from "./AddBook";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import Home from "./Home";
import DisplaySearchResults from "./DisplaySearchResults";
import SearchMessage from "./SearchMessage";
import { getBooks } from "../api";

const App = () => {
  const [bookShelf, setBookShelf] = useState([]);
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    getBooks()
      .then((response) => {
        setBookShelf(response);
      })
      .catch((error) => {
        console.log(error); //maybe display an error message
      });
  }, []);

  return (
    <div className="App">
      <div className="rightSide">
        <NavBar />
        <Switch>
          <Route path="/add">
            <AddBook setBookShelf={setBookShelf} bookShelf={bookShelf} />
          </Route>

          <Route path="/search">
            <SearchBooks setSearchResults={setSearchResults}/>
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Switch>
        <Route path="/search">
         {searchResults ? <DisplaySearchResults searchResults={searchResults} bookShelf={bookShelf} setBookShelf={setBookShelf}/> : <SearchMessage />} 
        </Route>

        <Route path="/">
          <DisplayBookshelf bookShelf={bookShelf} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
