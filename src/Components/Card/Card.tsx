import React from "react"
import Product from "../../types/Product"
import './Card.css'
import { generateRating } from "../../utils/utils"
import { useNavigate } from "react-router-dom"


interface DataProp {
    data : Product,
}

const Card : React.FC<DataProp>  = ({data}) => {
    
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/details', {
            state:{
                data : data
            }
        })
    }

    return(
       <div className="card-container" onClick={handleClick}>
        <img src={data?.thumbnail} alt="product-img" className="card-img" />
        <h3 style={{margin:'0px'}}>{data?.title}</h3>
            <p>{generateRating(data?.rating)}</p>
            <p style={{fontSize:'20px'}}>$ {data?.price}</p>
       </div>
    )
} 

export default Card