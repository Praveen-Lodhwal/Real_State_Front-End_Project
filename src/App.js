import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from './Component/Home'
import About from './Component/About';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Contact from './Component/Contact';
import PropertyList from './Component/PropertyList';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//=== App Component start

function App() {
  return (
    <>
      <Router>
        {/* <Navbar/>*/}
        <Routes> 
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/about' element={<About/>}> </Route>
          <Route path='/login' element={<Login/>}> </Route>
          <Route path='/signUp' element={<SignUp/>}> </Route>
          <Route path='/contact' element={<Contact/>}> </Route>
          <Route path='/propertylist' element={<PropertyList/>}> </Route>
        </Routes>        
      </Router>

       {/* <Home/> */}
       {/*  <Searchbar/>
      <Category/>
      <About/>
      <PropertyList/>
      <Call_To_Action/>
      <Team/>
      <Testimonial/>
      <Footer/>
      <Login/>
      <SignUp/> */}
    </>
  )
}

export default App
