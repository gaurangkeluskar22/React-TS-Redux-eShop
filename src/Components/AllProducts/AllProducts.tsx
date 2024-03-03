import React, { useEffect } from "react"
import NavBar from "../NavBar/NavBar"
import { useDispatch, useSelector } from "react-redux"
import { fetchedAllProducts } from "../../Redux/Slices/fetchProductSlice"
import { AnyAction, PayloadAction, ThunkDispatch } from "@reduxjs/toolkit"
import EshopStateType from "../../types/EshopStateType"
import EshopState from "../../types/EshopState"
import './AllProducts.css'
import Card from "../Card/Card"


const AllProducts : React.FC = () => {
    const dispatch : ThunkDispatch<EshopStateType,void,PayloadAction<any>> = useDispatch()
    const allProducts = useSelector((state : EshopState)=> state?.AllProducts)
   
    
    useEffect(()=>{ 
        dispatch(fetchedAllProducts())
    },[])

    return(
        <div>
            <NavBar/>
            <div className="all-products__container">
            {
                allProducts?.isLoading ?
                <div>
                    Loading
                </div>
                :
                allProducts?.data?.map((product, index)=>{
                    return(
                        <Card data={product} key={index}/>
                    )
                })
            }
            </div>
            
        </div>
    )
}

export default AllProducts