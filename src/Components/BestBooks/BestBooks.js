import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import NewBookForm from '../NewBookForm/NewBookForm';
import UpdateBookForm from '../UpdateBookForm/UpdateBookForm';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
      showForm: false,
      showUpdateForm: false,
      bookInfo: {}
    };
  };

  closeModal = () => this.setState({showForm: false, showUpdateForm: false});
  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
    this.setState({ bookList: bookData.data });
    console.log(bookData.data);
  };

  openForm = () => {
    this.setState({
      showForm: true
    })
  };

  handleNewBookSubmit = (event) => {
    event.preventDefault();

    let newBook = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value
    }
    this.closeModal();
    console.log('new book from form', newBook)
    this.postBooks(newBook);
  }

  handleUpdateBookSubmit = async (event) => {
    event.preventDefault();
    let bookToUpdate = {
      _id: this.state.bookInfo._id,
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value
    }
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`;
      let updatedBook = await axios.put(url, bookToUpdate);
      let bookList = [...this.state.bookList];
      let updatedBookList = bookList.map(oldbook => oldbook._id === updatedBook.data._id ? updatedBook.data : oldbook);
      console.log(updatedBookList)
      this.setState({bookList: updatedBookList, showUpdateForm: false})
      
    } catch (error) {
      console.log(error)
    }
  }

  postBooks = async (bookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let createdBook = await axios.post(url, bookObj);
      this.setState({
        bookList: [...this.state.bookList, createdBook.data]
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  deleteBook = async (id) => {
    let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
    await axios.delete(url);
    let updatedBooks = this.state.bookList.filter(book => book._id !== id);
    console.log(updatedBooks, id);
    this.setState({
      bookList: updatedBooks
    })
  }

  updateBook = async (book) => {
    this.setState({showUpdateForm: true, bookInfo: book})
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.bookList.length ? (
          <div>
            <Carousel className='Carousel'>
              {this.state.bookList.map(book => {
                return (
                  <Carousel.Item key={book._id}>
                    <img
                      className="d-block w-100"
                      // src={`https://via.placeholder.com/1600x900/045a04/FFFF00/?text=${book.title}`}
                      src={`https://place-hold.it/1600x900/3b6365/fff/000?text=${book.title}&fontsize=60`}
                      alt={`${book.title}`}
                    />
                    <Carousel.Caption>
                      <h3>{book.title}</h3>
                      <p>{book.description}</p>
                      <Button className='mx-2' onClick={() => { this.deleteBook(book._id) }} variant="outline-danger">Delete</Button>
                      <Button className='mx-2' onClick={() => { this.updateBook(book) }} variant="outline-warning">Update</Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
            <Button onClick={this.openForm} className="my-4" variant="outline-light">Add New Book</Button>
            <NewBookForm
              handleNewBookSubmit={this.handleNewBookSubmit}
              showForm={this.state.showForm}
              closeModal={this.closeModal} />
            <UpdateBookForm 
            handleUpdateBookSubmit = {this.handleUpdateBookSubmit}
            bookInfo = {this.state.bookInfo}
            showUpdateForm = {this.state.showUpdateForm}
            closeModal={this.closeModal} />
          </div>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
