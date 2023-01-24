import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: []
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
    this.setState({ bookList: bookData.data });
    console.log(bookData.data);
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.bookList.length ? (
          <Carousel className='Carousel'>
            {this.state.bookList.map(book => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    // src={`https://via.placeholder.com/1600x900/045a04/FFFF00/?text=${book.title}`}
                    src={`https://place-hold.it/1600x900/5f9ea0/fff/000?text=${book.title}&fontsize=60`}
                    alt={`${book.title}`}
                  />
                  <Carousel.Caption>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
