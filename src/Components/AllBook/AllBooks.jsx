import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './AllBooks.module.css'
import { useNavigate } from 'react-router-dom';
import { deleteBook } from '../../redux/LibraryActions';
import { connect } from 'react-redux';
import PopupDialog from '../DialogBox/DialogPopup';

function AllBooks({dispatch}) {
    const bookState=useSelector(state=>state.book);
    console.log(bookState);
    var books=[];
    const search=Array.isArray(bookState);
    if(!search){
        books=bookState.searchResults;
    }else{
        books=bookState;
    }
    const navigate =useNavigate();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [index,setIndex ]=useState(0);
    const handleAdd=()=>{
        navigate('/add');
    }
    const handleEdit = (book,id) => {
        const state = {
            book: book,
            id: id
            
        };
        console.log(id);
        navigate('/update', { state: state });
    };
    const handleDelete = (id,e) =>{
        console.log(id);
        e.stopPropagation();
        dispatch(deleteBook(id))
    }
    const openDialog = (id,e) => {
        e.stopPropagation();
        console.log(id);
        setIsDialogOpen(true);
        setIndex(id);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };
    const uid=localStorage.getItem('currentUser');
  return (
    <div className={styles.books}>
        <div className={styles.heading}>
            <h1>Your Collection</h1>
            <button onClick={()=>handleAdd()}>Add Book</button>
        </div>
        <ul className={styles.dynamic}>
            {books.length === 0 ? <div>No books found</div> :books.map((book,index)=>{
                return(
                    <li className={styles.dynamicadd}  key={book.id} onClick={()=>handleEdit(book,book.id)}>
                        <i className="fa-solid fa-trash" onClick={(e) => handleDelete(book.id, e)}></i>
                        <img className={styles.image} height="160px" width="200px" src={`https://picsum.photos/id/${index+10}/400/400`}/>
                        <div className={styles.bookname}>{book.name}</div>
                        <div className={styles.author}>
                            <p className={styles.authorName}>{book.author}</p>
                            <p className={styles.date}>{book.date}</p>
                        </div>
                        <p className={styles.progress} onClick={(e)=>openDialog(book.id,e)}>{(book.pages-book.currentPage)>=0?(book.pages-book.currentPage):0} Pages left </p>
                    </li>
                );}
            )}
        </ul>
        <PopupDialog isOpen={isDialogOpen} onClose={closeDialog} id={index}/>
    </div>
  )
}

export default connect() (AllBooks)
