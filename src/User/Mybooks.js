import React, { Component } from 'react'
import Navbar from './Navbaruser'
import './Mybooks.css'
import Welcome from './Welcome'
 class Mybooks extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
            showdisp:false,
            books: [],
            filter:""
        }
    }
    handleChange = event => {

        this.setState({ filter: event.target.value });
    };
    changestate=()=>
    {
        console.log(this.state.show)
        const show=this.state.showdisp
        this.setState(
            {
                showdisp:!show
            }
        )
        console.log(this.state.show)
    }
    componentDidMount() {
        fetch("http://localhost:3000/books").then(result => result.json().then(data => this.setState({
            books: data
        })))
            .catch((error) => console.log(error));
    }
    click=(id,book,name)=>
    {
        let copies=book.copies
        let issues =book.issued_to.filter((p)=>{
            return p!==name})
        let link="http://localhost:3000/books/"+id
        let updated_book={
            ...book,
            copies:copies+1,
            issued_to:[...issues]
        }
            fetch(link,{
                method:"PUT",
                body:JSON.stringify(updated_book),
                headers:{
                    "content-type":"application/json"
                
                
            }}).then(result=>console.log(result.json().then(data=>data))).catch(error=>console.log(error));
    this.props.history.push('/userhome');
        }




    render() {
        let cssclass=this.state.showdisp ?"cnt":"hide"
        let user=JSON.parse(localStorage.getItem( "authenticted_user" ));
        const filter = this.state.filter
        const books = this.state.books
        let data = []
        const lowercasedFilter = filter.toLowerCase();
        for (let i = 0; i < books.length; i++) {
            if(document.getElementById("quick").value==="tittle")
            {
            if (books[i].tittle.toLowerCase().includes(lowercasedFilter)) {
            if ((books[i].issued_to.includes(user.username))){
                data.push(<tr>
                   
                    <td>{books[i].tittle} </td>
                    <td>{books[i].author} </td>
                    <td>{books[i].genere}</td>
                    <td><button className="btn btn-primary" onClick={() => this.click(books[i].id,books[i],user.username)}>return</button> </td>
                    </tr>
                );
            }

        }}
        if(document.getElementById("quick").value==="author")
        {
        if (books[i].author.toLowerCase().includes(lowercasedFilter)) {
        if ((books[i].issued_to.includes(user.username))){
            data.push(<tr>
               
               <td>{books[i].tittle} </td>
                <td>{books[i].author} </td>
                <td>{books[i].genere}</td>
                <td><button className="btn btn-primary" onClick={() => this.click(books[i].id,books[i],user.username)}>return</button> </td>
                </tr>
            );
        }
    }}
    if(document.getElementById("quick").value==="genere")
    {
    if (books[i].genere.toLowerCase().includes(lowercasedFilter)) {
    if ((books[i].issued_to.includes(user.username))){
        data.push(<tr>
            <td>{books[i].tittle} </td>
            <td>{books[i].author} </td>
            <td>{books[i].genere}</td>
            <td><button className="btn btn-primary" onClick={() => this.click(books[i].id,books[i],user.username)}>return</button> </td>
            </tr>
        );
    }
}}
    }
        return (
            
            <div className="Mybooks">
            <Navbar changed={this.changestate}/>
            <Welcome />
            <div className={cssclass}>
            <select name="books" id="quick">
                <option value="tittle">Title</option>
                <option value="author">Author</option>
                <option value="genere">Genere</option>
                
            </select>
            <input value={this.state.filter} onChange={this.handleChange} />
            </div>
                <table align="center"  class="table">
                <thead>
                    <tr>
                        
                        <th id="heading"scope="col">Tittle</th>
                        <th id="heading" scope="col"> Author</th>
                        <th id="heading" scope="col"> Genere</th>
                        <th id="heading" scope="col"> Action</th>
                    </tr>
                    </thead>
                    {data}

                </table >
            </div>
            
        )
    }
}

export default Mybooks
