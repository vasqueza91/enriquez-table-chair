import React from "react";
import './Product.css'

const Product = () => {
    return(
        <div className="product-container">
            <h2>Our Product</h2>
            <div className="product-tables">
                <h3>Round Tables</h3>
                <div className="product-tables-pic">
                    <p>We provide the finest Round Tables. Our Tables our always delivered to you clean and spotless.</p>
                    <img src="../imgFolder/tables-chairs1.jpg" alt="table" width="500" height="600"></img>
                </div>
            </div>
            <div className="product-chairs">
            <h3>Chairs</h3>
                <div className="product-chairs-pic">
                    <p>Our chairs are confortable to it in and match our tables perfectly.</p>
                </div>
            </div>
        </div>
    )
}
export default Product