import React from "react"
import Product from "../../types/Product"
import './Card.css'
import { generateRating } from "../../utils/utils"
import { useNavigate } from "react-router-dom"
import { removeFromCart } from "../../Redux/Slices/cartSlice"
import { useDispatch } from "react-redux"


interface DataProp {
    data : Product,
    isMyCart?: boolean,
}

const Card : React.FC<DataProp>  = ({data, isMyCart}) => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        if(!isMyCart){
            navigate('/details', {
                state:{
                    data : data
                }
            })
        }
    }

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(data?.id))
    }

    return(
       <div className="card-container" onClick={handleClick}>
        <img src={data?.thumbnail} alt="product-img" className="card-img" />
        <h3 style={{margin:'0px'}}>{data?.title}</h3>
            <p>{generateRating(data?.rating)}</p>
            <p style={{fontSize:'20px'}}>$ {data?.price}</p>
        {
            isMyCart && <button className="card-button" onClick={handleRemoveFromCart}>Remove from Cart</button>
        }
       </div>
    )
} 

export default Card