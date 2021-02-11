import React, {useState} from "react";
import { getGoogleResults } from "../api";
import { Form, Button } from "react-bootstrap";

const SearchBooksForm = ({setSearchResults, bookshelf}) => {
    const [googleBookSearch, setGoogleBookSearch] = useState("");

  return (
    <>
      <Form
        className="m-3"
        
        onSubmit={async(event) => {
          event.preventDefault()
          if(!googleBookSearch){
            return
          }
          const results = await getGoogleResults(googleBookSearch)
          setSearchResults(results)
          setGoogleBookSearch('')
         
        }}
      >
        <Form.Group controlId="formBasicSearch">
          <Form.Label>Searching for a good book?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Start searching..."
          //  autoComplete='off'
            value={googleBookSearch}
            onChange={ (e) => {
                setGoogleBookSearch(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SearchBooksForm;
