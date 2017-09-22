import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  };

  render() {

    const shelves = ["currentlyReading", "wantToRead", "read"];
    const shelveNames = ["Currently Reading", "Want To Read", "Read"];

    //let currentlyReading = books.filter((book) => book.shelf === 'currentlyReading')
    //let wantToRead = books.filter((book) => book.shelf === 'wantToRead')
    //let read = books.filter((book) => book.shelf === 'read')

    return (
        <div>
          {shelves.map((shelf, index) => {
                return (
                    <div key={index} className="list-books-content">
                      <div>
                        <div>
                          <div className="bookshelf">
                            <h2 className="bookshelf-title">{shelveNames[index]}</h2>
                            <div className="bookshelf-books">
                              <ol className="books-grid">
                                {this.props.books.filter(book => book.shelf === shelf)
                                    .map(book => (
                                        <Book
                                            onChangeShelf={this.props.onChangeShelf}
                                            key={book.id}
                                            book={book}
                                        />
                                    ))
                                }
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                )
              }
          )}
        </div>
    )
  }
}

export default ListBooks
