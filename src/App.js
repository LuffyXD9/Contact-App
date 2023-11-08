import './App.css';
import { ToastContainer } from 'react-toastify';
import Content from './components/Content';
// import Main from './components/Main';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
  <>
      <ToastContainer/>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Content/>}></Route>
        {/* <Route exact path='/' element={<Main/>}></Route> */}
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
