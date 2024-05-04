import React from 'react'
import img from '../assets/manimg.svg';
import BlogData from './BlogData';

const Blog = () => {
  return (
    <>
       <div className="blogmain">
        <div className="blog-container">
            <div className="blog-title">
                <p>OUR BLOG</p>
                
            </div>
            <div className="blog-info">
            <BlogData/>
            </div>
        </div>
        </div> 
    </>
  )
}

export default Blog