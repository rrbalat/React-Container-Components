import React from 'react'
import BookList from './BookList'

class BookListContainer extends React.Component
{
    constructor()
    {
        super()

        this.state = {
            books: []
        }
    }

    componentDidMount()
    {
        fetch('https://learn-co-curriculum.github.io/books-json-example-api/books.json')
            .then(response => response.json())
            .then(bookData => this.setState({ books: bookData.books }))
    }

    render()
    {
        console.log(this.state.books)
        return (
            <BookList books={this.state.books} />

        )
    }
}

export default BookListContainer