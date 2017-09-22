import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import Book from './Book'

class SearchBooks extends Component {

  static propTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
  };

  state = {
    query: '',
    books: []
  };

  searchQuery = (query) => {
    if (!query) {
      this.setState({query: '', books: []})
    } else {
      this.setState({query: query.trim()});
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          books = []
        }
        books.map(book => (this.props.books.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
        this.setState({books})
      })
    }
  };


  render() {
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input
                  type="text"
                  placeholder="Search by title or author"
                  onChange={(e) => this.searchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.state.books.map(book => (
                      <Book
                          onChangeShelf={this.props.onChangeShelf}
                          key={book.id}
                          book={book}
                      />
                  ))
                  }
                </ol>
              </div>
            </ol>
          </div>
        </div>
    )
  }
}

export default SearchBooks
