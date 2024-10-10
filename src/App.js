
import './App.css';
// import Banner from './components/Homepage/Banner';
import Home from './components/Homepage/Home';
import Login from '../src/components/Login-signup/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutus from './components/about-us/Aboutus';
import Service from './components/services/Service';
import LoginPage from './components/Login-signup/LoginPage';
import ForgetPass from './components/Login-signup/ForgetPass';
import Bookservice from './components/service-booking/Bookservice';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path ='/aboutus' element={<Aboutus/>}/>
    <Route path ='/services' element={<Service/>}/>
    <Route path='/loginpage' element={<LoginPage/>}/>
    <Route path="/bookservice" element={<Bookservice/>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/forget' element={<ForgetPass/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
