import React, { useEffect } from "react"
import NavBar from "../NavBar"
import { useDispatch, useSelector } from "react-redux"
import { fetchedAllProducts } from "../../Redux/Slices/fetchProductSlice"
import { AnyAction, PayloadAction, ThunkDispatch } from "@reduxjs/toolkit"
import EshopStateType from "../../types/EshopStateType"
import EshopState from "../../types/EshopState"


const AllProducts : React.FC = () => {
    const dispatch : ThunkDispatch<EshopStateType,void,PayloadAction<any>> = useDispatch()
    const allProducts = useSelector((state : EshopState)=> state?.AllProducts?.data)
   
    
    useEffect(()=>{ 
        dispatch(fetchedAllProducts())
    },[])

    return(
        <div>
            <NavBar/>
            {
                allProducts?.map((product)=>{
                    return(
                        <div>
                            {product?.title}
                            </div>
                    )
                })
            }
            
        </div>
    )
}

export default AllProducts