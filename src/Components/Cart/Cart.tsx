import React from "react";
import './Cart.css'
import { useSelector } from "react-redux";
import EshopState from "../../types/EshopState";
import Card from "../Card/Card";

const Cart : React.FC = () => {
    const cartData = useSelector((state : EshopState)=> state.Cart.data)

    return(
        <>
            {/* <NavBar/> */}
            <div className="cart-container">
               {
                cartData?.length ?
                <div className="cart-card-wrapper">
                {
                    cartData?.map((item, index)=>{
                        return ( 
                            <Card data={item} key={index} isMyCart={true}/>
                        )
                    })
                }
                </div>
                :
                <img src="https://blogzine.webestica.com/assets/images/icon/empty-cart.svg" className="card-no-data"></img>
               } 
            </div>
        </>
    )
}


export default Cart