import React from 'react'
import img from '../assets/manimg.svg';
import img2 from '../assets/womanimg.svg';
import img3 from '../assets/compimg.svg';

const Blog = () => {
  return (
    <>
       <div className="blogmain">
        <div className="blog-container">
            <div className="blog-title">
                <p>OUR BLOG</p>
                
            </div>
            <div className="blog-infoo">
            {/* <BlogData/> */}
            {/* Reactive  islemedi :( */}

            <div className="blog-info">
                  <div className="blog-hf">
                 <img className='blogimg' src={img} alt="" />
                  <div className="blog-header">
                  How one Webflow user grew his single person consultancy from $0-100K in 14 months
                    </div>
                    <div className="blog-footer">
                  See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                        
                    </div>
                    <div className="blog-btn">
                    Read More
                    </div>
                  </div>
                  <div className="blog-hf">
                 <img className='blogimg' src={img2} alt="" />
                  <div className="blog-header">
                  How one Webflow user grew his single person consultancy from $0-100K in 14 months
                    </div>
                    <div className="blog-footer">
                  See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                        
                    </div>
                    <div className="blog-btn">
                    Read More
                    </div>
                  </div>
                  <div className="blog-hf">
                 <img className='blogimg' src={img3} alt="" />
                  <div className="blog-header">
                  How one Webflow user grew his single person consultancy from $0-100K in 14 months
                    </div>
                    <div className="blog-footer">
                  See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                        
                    </div>
                    <div className="blog-btn">
                    Read More
                    </div>
                  </div>
                 </div>
            </div>
        </div>
        </div> 
    </>
  )
}

export default Blog