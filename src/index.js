import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Data } from './data';
import  BookContainer  from './books';


import './index.css';


function BookList() {
    const [books, setBooks] = useState(Data);
    return (
        <section className="BookList">
            {
                books.map((book)=> {
                    return (
                        <BookContainer key={book.id} {...book}/>
                    )
                })
            }
        </section>
    );
}


ReactDOM.render(<BookList />, document.querySelector("#root"));
