import React, { Component } from 'react'

import './Books.css'
class Books extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
            show: true,
            books: []
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/books").then(result => result.json().then(data => this.setState({
            books: data
        })))
            .catch((error) => console.log(error));


    }
    componentDidUpdate() {
        fetch("http://localhost:3000/books").then(result => result.json().then(data => this.setState({
            books: data
        })))
            .catch((error) => console.log(error));


    }
    click=(id,book,name)=>
    {
        let copies=book.copies
        let issues=book.issued_to
        let link="http://localhost:3000/books/"+id
        let updated_book={
            ...book,
            copies:copies-1,
            issued_to:[...issues,name]
        }
            fetch(link,{
                method:"PUT",
                body:JSON.stringify(updated_book),
                headers:{
                    "content-type":"application/json"
                
                
            }}).then(result=>console.log(result.json().then(data=>data))).catch(error=>console.log(error));
    }





    render() {
        
        let user=JSON.parse(localStorage.getItem( "authenticted_user" ));
        let books = this.state.books
        let data = []
        
        for (let i = 0; i < books.length; i++) {
            if ((books[i].copies > 0) &&(books[i].issued_to.includes(user.username))){
                data.push(<tr>
                    <th scope="row">{books[i].id}</th>
                    <td>{books[i].tittle} </td>
                    <td>{books[i].author} </td>

                    <td>{books[i].genere} </td>
                    <td>{books[i].copies} </td>
                    <td>Already Issued</td>
                </tr>)}
           else if (books[i].copies > 0) {
                data.push(<tr>
                    <th scope="row">{books[i].id}</th>
                    <td>{books[i].tittle} </td>
                    <td>{books[i].author} </td>

                    <td>{books[i].genere} </td>
                    <td>{books[i].copies} </td>
                    <td><button className="btn btn-primary" onClick={() => this.click(books[i].id,books[i],user.username)}>Issue</button> </td>
                </tr>)
            }
            else {
                data.push(<tr>
                    <th scope="row">{books[i].id}</th>
                    <td>{books[i].tittle} </td>
                    <td>{books[i].author} </td>

                    <td>{books[i].genere} </td>
                    <td>{books[i].copies} </td>
                    <td>Issued to someone</td>
                </tr>)
            }
        }
        return (
            <div className="Books">
                <table align="center"  class="table">
                <thead>
                    <tr>
                        <th id="heading" scope="col">Id</th>
                        <th id="heading"scope="col">Tittle</th>
                        <th id="heading" scope="col"> Author</th>
                        <th id="heading" scope="col">Genere </th>
                        <th id="heading" scope="col">No of Copies</th>

                        <th id="heading" scope="col"> Action</th>
                    </tr>
                    </thead>
                    {data}

                </table >
               
                
            </div>
        )
    }
}

export default Books
