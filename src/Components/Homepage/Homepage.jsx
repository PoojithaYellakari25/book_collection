import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Homepage.module.css';
import AddBook from '../AddBook/AddBook';
import AllBooks from '../AllBook/AllBooks';
import Search from '../Search/Search';
import logo from'../../Assets/logo.png';

function Homepage() {
    const navigate=useNavigate();
    async function logout() { 
      localStorage.removeItem('currentUser');    
        navigate('/login');
    }
  return (
    <div>
      <div className={styles.header}>
        <img className={styles.logo} src={logo}/>
        <div className={styles.search1}>
          <Search />
        </div>
        <button className={styles.logout} onClick={logout}>Logout</button>
      </div>
      <div className={styles.search2}>
          <Search />
        </div>
      <AllBooks />
    </div>

  )
}

export default Homepage