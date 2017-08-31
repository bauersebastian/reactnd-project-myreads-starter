import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends Component {
  state = {
    books: [],
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  changeShelf = (book, shelf) => {
   if (this.state.books) {
     BooksAPI.update(book,shelf).then(() => {
       book.shelf = shelf;
       this.setState(state => ({
         books: state.books.filter(b => b.id !== book.id).concat([ book ])
       }))
     })
   }
 }

  render() {
    return (
      <div className="app">
        <ListBooks
          books={this.state.books}
          onChangeShelf={this.changeShelf}
        />
      </div>
    )
  }
}

export default BooksApp
