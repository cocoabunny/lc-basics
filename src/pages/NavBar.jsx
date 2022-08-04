import React from 'react';
import {Link} from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
        <nav>
    <ul>
        <li>
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
        </li>
        <li>
            {/* <a href="/about">About</a> */}
            <Link to="/about">About</Link>
        </li>
        <li>
            {/* <a href="/contact">Contact</a> */}
            <Link to="/contact">Contact</Link>
        </li>
        <li>
            {/* <a href="/contact">Contact</a> */}
            <Link to="/blog">Blog</Link>
        </li>
    </ul></nav>
    </div>
  )
}
