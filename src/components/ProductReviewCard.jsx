import React from 'react'
import '../styles/productReviewsCard.css'
const ProductReviewCard = ({image,name,price,review}) => {
    return (
        <div className='productReviewsCard'>
            <img src={image} alt="" />
            <h5>{review}</h5>
            <span>{name} </span>
            <b>{price} </b>

        </div>
    )
}

export default ProductReviewCard
