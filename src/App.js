
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './LoginPage/RegisterPage';

function App() {
  return (
    <div >
   
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HomePage/>}></Route> */}
          <Route path="/" element={<Layout Component={LoginPage}/>}></Route>
          <Route path="/register" element={<Layout Component={RegisterPage}/>}></Route>
          {/* <Route path='/detail/:id' element={<Layout Component={DetailPage}/>} />
          <Route path='/booking/:id' element={<Layout Component={BookingPage}/>} />
          <Route path='*' element={ <Layout Component={NotFoundPage}/>} /> */}
        

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
