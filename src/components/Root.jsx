import React from 'react'
import { NavBar } from '../pages/NavBar'
import About from '../pages/About'
import App from './App'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { Contact } from '../pages/Contact';
import { Blog } from '../pages/Blog';
import { BlogPost } from '../pages/BlogPost';
import { NoMatch } from '../pages/NoMatch';
 
function Root() {
  return (
    <>
    
    <BrowserRouter>
    <NavBar />
      <Routes>
      <Route path="/" element={<App />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route exact path="/blog" element={<Blog />} />
    <Route path="/blog/:id" element={<BlogPost />} />
    <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
</>
  );
}

export default Root;