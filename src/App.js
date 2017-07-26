import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends Component {
  state = {
    books: [],
    showSearchPage: true
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks
            showSearchPage={this.state.showSearchPage}
          />
        ) : (
          <ListBooks
            books={this.state.books}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
