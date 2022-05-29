import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Header from './components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Post from './Pages/Post';
import NotFound from './Pages/NotFound';

import { useState } from 'react';

import './App.css';

const App = () =>{

  const [ login, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      
      <button onClick={() => setLogin(!login)}>
        {login?"logout":"login"}
        </button>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={login?<Profile />:<Navigate to = '/' />}>
      </Route> 
      <Route path="/post/:id" element={<Post />} />
      <Route path='*' element={<NotFound />} />
      </Routes> 
      </div>     
    </BrowserRouter>    
  )
}

export default App;
