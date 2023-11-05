import './App.css';
import { ToastContainer } from 'react-toastify';
// import { Route, Routes } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import Content from './components/Content';

// import { useEffect } from 'react';
import Nav from './components/Nav';
import AddContact from './components/AddContact';
// import EditContact from './components/EditContact';
// import { Route, Routes } from 'react-router-dom';
// import ViewContact from './components/ViewContact';


function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const data = [];
  //   dispatch({type : 'LOAD_CONTACTS', payload: data});
  // },[dispatch]);
  return (
    <div className="App">
      <ToastContainer/>
      <Nav/>
      <AddContact/>
      {/* <Routes>
        <Route exact path='/' element={<Content/>}></Route>
        <Route path='/add' element={<AddContact/>}></Route>
        <Route path='/edit' element={<EditContact/>}></Route>
        <Route path='/view' element={<ViewContact/>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
