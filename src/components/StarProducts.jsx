import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/starProduct.css'

const StarProducts = ({starProduct}) => {
    return (
        <div className='startProducts'>
           <div>
               <Link to={starProduct[0].url} > <img src ={starProduct[0].image} alt="!st Product" /> </Link>
           </div>
           <div>
           <Link to={starProduct[1].url} > <img src ={starProduct[1].image} alt="!st Product" /> </Link>
           <Link to={starProduct[2].url} > <img src ={starProduct[2].image} alt="!st Product" /> </Link>
           <Link to={starProduct[3].url} > <img src ={starProduct[3].image} alt="!st Product" /> </Link>
          
           </div>
        </div>
    )
}

export default StarProducts
