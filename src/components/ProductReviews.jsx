import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import '../styles/productReviews.css'
const ProductReviews = ({productReviews}) => {
    return (
        < >
            <div className="productReviews">
                {productReviews.map((item ,index)=>(

                    <ProductReviewCard price ={item.price} name={item.name} image={item.image} review={item.review} key={item.image} />
                ))}
            </div>
        </ > 
    )
}

export default ProductReviews
