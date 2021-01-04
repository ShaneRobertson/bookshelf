import React, {useState} from "react";
import { getGoogleResults } from "../api";
import { Form, Button } from "react-bootstrap";

const SearchBooksForm = ({setSearchResults}) => {
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
          console.log('The results from the googlebooks api: ', results)
          setSearchResults(results)
          setGoogleBookSearch('')
         
        }}
      >
        <Form.Group controlId="formBasicSearch">
          <Form.Label>Searching for a good book?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Start searching..."
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
