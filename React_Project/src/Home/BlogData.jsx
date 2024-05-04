import React from 'react'
import image from '../assets/manimg.svg'

const BlogData = () => {
    const data = [
        {
            img:image,
        title:'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        desc:'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
        btn:'Read More'
    },
    {  img:image,
        title:'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        desc:'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
        btn:'Read More'
    },
    {   img:image,
        title:'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
        desc:'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
        btn:'Read More'
    },
]
  return (
    <div>
        {
            data.map(({img,title,desc,btn})=>{
                return <div>
              <div className="bbb">
              {/* <div className="blog-info">
                  <div className="blog-hf">
                 <img className='blogimg' src={img} alt="" />
                  <div className="blog-header">
                        {title}
                    </div>
                    <div className="blog-footer">
                        {desc}
                    </div>
                    <div className="blog-btn">
                        {btn}
                    </div>
                  </div>
                 </div> */}
              </div>
                </div>
            }

            
                    
            )
        }
    </div>
  )
}

export default BlogData