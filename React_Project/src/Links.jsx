import React from 'react'

const Links = () => {
    const links = [{to:'/',title:'Home'},
    {to:'/Aboutus',title:'About us'},
    {to:'/Features',title:'Features'},
    {to:'/Pricing',title:'Pricing'},
    {to:'/faq',title:'FAQ'},
    {to:'/Blog',title:'Blog'},
    
]
  return (
    
    <div>
     {
          links.map(({to,title})=>{
            return <NavLink className='navlinks' to={to}>{title}</NavLink>
          })
     }
    </div>
  )
}

export default Links