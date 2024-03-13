import React from 'react'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Search.module.css';
import { searchByAuthor,searchByBook,searchByDate,resetSearch } from '../../redux/LibraryActions';
import AllBooks from '../AllBook/AllBooks';
function Search() {
    const searchData = useRef();
    const searchCriteria = useRef();
    const dispatch = useDispatch();

    const handleSearch=(e)=>{
      e.preventDefault();
      const data=searchData.current.value.trim();
      const criteria = searchCriteria.current.value;
      dispatch(resetSearch());
      switch(criteria){
        case 'title':
          dispatch(searchByBook(data));
          break;
        case 'author':
          dispatch(searchByAuthor(data));
          break;
        case 'date':
          dispatch(searchByDate(data));
          break;
        default:
          break;
      }
      
    }
    const handleChange = (e) => {
      handleSearch(e);
  }

  return (
    <form onSubmit={handleSearch} className={styles.searchBox}>
      <div className={styles.box}>
        <input type="text" placeholder='Search after selecting criteria' className={styles.search} ref={searchData} onChange={handleChange}></input>
        <select className={styles.dropdown} ref={searchCriteria}> 
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="date">Publishing Date</option>
        </select>
      </div>
        
    </form>
  )
}

export default Search