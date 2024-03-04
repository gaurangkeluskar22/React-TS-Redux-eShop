import React, { MouseEventHandler, useEffect } from "react"
import NavBar from "../NavBar/NavBar"
import Product from "../../types/Product"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import './ProductDetails.css'
import { generateRating } from "../../utils/utils"
import { useDispatch } from "react-redux"
import { addToCart } from "../../Redux/Slices/cartSlice"

const ProductDetails : React.FC = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const [productData, setProductData] = useState<Product>()
    const [displayImg, setDisplayImg] = useState<string>('')
    
    useEffect(()=>{
        if(location?.state?.data){
            setProductData(location?.state?.data)
            setDisplayImg(location?.state?.data?.thumbnail)
        }
    },[])

    const handleImageChange: MouseEventHandler<HTMLImageElement> = (event) => {
        const image = event?.currentTarget?.src; // Get the src attribute of the clicked image
        setDisplayImg(image);
    };

    const handleAddToCart = () => {
        if(productData){
            dispatch(addToCart(productData))
        }
    }

    return(
        <div>
            {/* <NavBar/> */}
            <div className="product-details-container">
                <div className="product-details__images">
                    {
                        productData?.images?.map((image, index)=>{
                            return(
                                <img src={image} key={index} onClick={handleImageChange}></img>
                            )
                        })
                    }
                </div>
                <div className="product-details__display-img">
                    <img src={displayImg} />
                </div>
                <div className="product-details">
                    <h1>{productData?.title}</h1>
                    <p style={{fontSize:'20px'}}>
                        {productData?.description}
                    </p>
                    <p style={{marginTop:'10px'}}>{generateRating(productData?.rating)} Ratings</p>
                    <p className="product-details-limited-text">Limited time Deal</p>
                    <h3 style={{margin:'10px 0px'}}>$ {productData?.price}</h3>
                    <h4 style={{margin:'0px'}}>Discount :{productData?.discountPercentage} %</h4>
                    <p className="product-details-instock-text"> In Stock <span style={{color:'black'}}>only {productData?.stock} left</span></p>
                    <p>Category: {productData?.category}</p>
                    <p>Brand: {productData?.brand}</p>
                    <button className="product-details-add_to_cart" onClick={handleAddToCart}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails