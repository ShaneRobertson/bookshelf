import React, { useState, useEffect } from "react";
import DisplayBookshelf from "./DisplayBookshelf";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";
import SearchBooksForm from "./SearchBooksForm";
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
        console.log(error); 
      });
  }, []);

  return (
    <div className="App">
      <div className="rightSide">
        <NavBar />
        <Switch>
          <Route path="/search">
            <SearchBooksForm setSearchResults={setSearchResults} />
          </Route>

          <Route path="/">
            <Home bookShelf={bookShelf} setBookShelf={setBookShelf} />
          </Route>
        </Switch>
      </div>
      <Switch>
        <Route path="/search">
         {searchResults ? <DisplaySearchResults searchResults={searchResults} bookShelf={bookShelf} setBookShelf={setBookShelf} /> : <SearchMessage />} 
        </Route>

        <Route path="/">
          <DisplayBookshelf bookShelf={bookShelf} setBookShelf={setBookShelf}/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
