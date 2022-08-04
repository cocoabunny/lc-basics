import React from 'react'
import {useParams} from 'react-router-dom';

export const BlogPost = () => {

    const params = useParams();
  return (
    <div className="container">
This is Blost Post {params.id}
    </div>
  )
}
