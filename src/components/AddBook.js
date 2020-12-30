import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap'
import { createNewBook } from "../api";

const AddBook = ({setBooks, books}) => {
const [bookTitle, setBookTitle] = useState('')
const [bookAuthor, setBookAuthor] = useState('')
const [bookDescription, setBookDescription] = useState('')

    return (
      <div className='addBookForm'>
      <Form autoComplete='off'
      onSubmit={async (event) => {
          event.preventDefault()
          console.log('prevented')
          const newBook = await createNewBook(bookTitle, bookAuthor, bookDescription)
          const booklist = [...books]
          booklist.push(newBook)
          setBooks(booklist)
          setBookTitle('')
          setBookAuthor('')
          setBookDescription('')

      }}
      >
      <Form.Group controlId="title">
        <Form.Label>Book Title</Form.Label>
        <Form.Control  type="text" placeholder="Book Title" value={bookTitle} onChange={(event) => {
          setBookTitle(event.target.value)
        }}/>
      </Form.Group>
    
      <Form.Group controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Author" value={bookAuthor} onChange={(event) => {
          setBookAuthor(event.target.value)
        }}/>
      </Form.Group>
      
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control type="textarea" placeholder="Provide a short description.." value={bookDescription} onChange={(event) => {
          setBookDescription(event.target.value)
        }}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    )
}

export default AddBook