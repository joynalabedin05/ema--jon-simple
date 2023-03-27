import React from 'react';
import './Product.css'

const Product = (props) => {
   const {img, name, seller, quantity, price, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>price: ${price}</p>
                <p>manufacturer: {seller}</p>
                <p>rating: {ratings} star</p>
            </div>
            <button className='btn-card'>add to cart</button>
        </div>
    );
};

export default Product;