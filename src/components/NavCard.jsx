import React from 'react'
import '../styles/navcard.css'
const NavCard = ({name,price,image ,index}) => {
    return (
        <div className='navCard'>
            <img src={image} alt={`${index} Phone`} />
            <p>{name}</p>
            <span>{price} </span>
        </div>
    )
}

export default NavCard
