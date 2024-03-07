import React from 'react';
import HomeContainer from './Components/HomeContainer.jsx';
import NavBar from './Containers/NavBar.jsx';
import { Routes, Route } from 'react-router-dom';
import Tool from './Components/Tool.jsx';
import AboutPage from './Components/AboutPage.jsx'; // Ensure the extension is correct
import NotFound from './Components/NotFound.jsx'; // Assuming you have a NotFound component
import Footer from './Containers/Footer.jsx';

const App = () => {
  return (
    <>
    {/* Rendering the Navbar always */}
      <div className='pt-2 pr-6 pl-6 px-8 m-2 mx-4'>
        <NavBar/>
      </div>
      {/* Body of App componenet is what is changing depending on the path ('/':home '/about': aboutpage, '/tool': tool page) */}
      <Routes>
        <Route path='/' element={<HomeContainer/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/tool' element={<Tool/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      {/* Footer always rendered */}
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
