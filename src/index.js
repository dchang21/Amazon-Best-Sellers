import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  {books} from './books';
import Book from './bookForm';

const BookList = () =>{
    return (
        <React.Fragment>
        <h1>Amazon Best Seller</h1>
        <section className='booklist'>
        {books.map((book, index) =>{
            return(
                <Book {...book}  number = {index}></Book>
            );
        })}
        
    </section>
    </React.Fragment>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>)