import React from 'react'
import { Link } from 'react-router-dom';

export const Blog = () => {
  return (
    <div>
    <ul>
    <li>
            <Link to="/blog/1">Blog One</Link>
        </li>
        <li>
        <Link to="/blog/2">Blog Two</Link>
        </li>
    </ul>
       

    </div>
  )
}
