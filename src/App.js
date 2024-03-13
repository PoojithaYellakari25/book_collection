
import './App.css';
import Signup from './auth/Register/Signup';
import Login from './auth/Login/Login';
import Homepage from './Components/Homepage/Homepage'
import { Routes,Route } from 'react-router-dom';
import AddBook from './Components/AddBook/AddBook';
import { useNavigate } from 'react-router-dom';
import { useEffect} from 'react';

function App() {
  const navigate=useNavigate();
  useEffect(()=>{
    const email=localStorage.getItem('isLoggedIn');
    console.log(email);
    if(email==null){
      navigate('/login');
      console.log('hi');
    }else{
      navigate('/homepage');
      console.log("hello");

    }
  },[])
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/homepage' element={<Homepage />}></Route>
          <Route path='/add' element={<AddBook />}></Route>
          <Route path='/update' element={<AddBookWithProps />}></Route>
      </Routes>
    </div>
  );
}
const AddBookWithProps = (props) => {
  return <AddBook {...props} />;
}

export default App;
