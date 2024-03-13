import React, { useRef } from 'react'
import styles from './AddBook.module.css'
import { addBook,updateBook } from '../../redux/LibraryActions';
import { connect } from 'react-redux';
import { useLocation,useNavigate } from 'react-router-dom';

function AddBook({dispatch}) {
    const navigate =useNavigate();
    const location=useLocation();
    const {state}=location;
    const bookName=useRef();
    const authorName=useRef();
    const publishedDate=useRef();
    const pages=useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const nameValue = bookName.current.value.trim();
        const authorValue = authorName.current.value.trim();
        const dateValue = publishedDate.current.value.trim();
        const pageValue = pages.current.value.trim();

        if (!nameValue || !authorValue || !dateValue || !pageValue) {
            alert("Please fill in all fields before submitting.");
            return;
        }
        const books={
            name:bookName.current.value,
            author:authorName.current.value,
            date:publishedDate.current.value,
            pages:pages.current.value,
            currentPage:0
        }
        if (state) {
            dispatch(updateBook(books,state.id));
        } else {
            dispatch(addBook(books));
        }

        
        bookName.current.value="";
        authorName.current.value="";
        publishedDate.current.value="";
        pages.current.value="";

        navigate('/homepage')

    }
  return (
    <div className={styles.container}>
    <div className={styles.addBook}>
            <h1>{state ? "Update Book" : "Add Your Book"}</h1>
            <form className={styles.addform} onSubmit={handleSubmit}>
                <label for="name" className={styles.addLabel}>Book Name</label>
                <input type="text" ref={bookName} id="name" defaultValue={state?.book.name || ""} className={styles.addInput}></input>
                <label for="author" className={styles.addLabel}>Author Name</label>
                <input type="text" ref={authorName} id="author" defaultValue={state?.book.author || ""} className={styles.addInput}></input>
                <div className={styles.set}>
                    <div className={styles.set1}>
                        <label for="date" className={styles.setLabel}>Published Date</label>
                        <input type="date" ref={publishedDate} id="date" defaultValue={state?.book.date || ""} className={styles.setInput}></input>
                    </div>
                    <div className={styles.set2}> 
                        <label for="Pages" className={styles.setLabel}>Total Pages</label>
                        <input type="number" ref={pages} id="Pages" defaultValue={state?.book.pages || ""} className={styles.setInput}></input>
                    </div>
                </div>
                <button type="submit" className={styles.addButton}>{state ? "Update Book" : "Add Book"}</button>
            </form>
        </div>
        </div>
  )
}

export default connect()( AddBook);