import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookList: [] };
  }

  getBooks = async () => {
    let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
    this.setState({ bookList: bookData.data });
    console.log(bookData.data);
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <div> {this.state.bookList.length > 0 && this.state.bookList.map(book => {
            return (
              <div>
                <h2>{book.title}</h2>
                <p>{book.description}</p>
              </div>
            );
          })}</div>
          <Routes>
            <Route
              exact path="/"
              element={<BestBooks />}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
