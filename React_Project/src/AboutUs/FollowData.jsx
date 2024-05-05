import React from 'react';
import ball from '../assets/Aboutus/ball.svg';

const FollowData = () => {
  const data = [{title:'Planning',
    desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
  },
  {title:'Conception',
    desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
  },
  {title:'Desing',
    desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
  },
  {title:'Development',
  desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
}

]
  return (
    <>
    {
      data.map(({title,desc})=>{
        return <div>
        <div className="follow-desc">
        <img src={ball} alt="" />
          <div className="follow-header">{title}</div>
               <div className="follow-foot">{desc}</div>
        </div>
        </div>
      })
    }
    
    </>
  )
}

export default FollowData