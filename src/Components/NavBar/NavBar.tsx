import React, { ChangeEvent } from "react"
import './NavBar.css'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import EshopState from "../../types/EshopState"
import { useState } from "react"
import { searchProduct } from "../../Redux/Slices/fetchProductSlice"
import EshopStateType from "../../types/EshopStateType"
import { PayloadAction, ThunkDispatch } from "@reduxjs/toolkit"

const NavBar  : React.FC = () => {
    const [searchText, setSearchText] = useState<string>('')
    
    const navigate = useNavigate()
    const dispatch : ThunkDispatch<EshopStateType, void, PayloadAction<any>> = useDispatch()
    const cartDataCount = useSelector((state : EshopState)=> state.Cart.count)

    const handleLogoClick = () => {
        navigate('/')
    }

    const handleCartClick = () => {
        navigate('/cart')
    }

    const handleInputChange = (e : ChangeEvent<HTMLInputElement>) => {
        const value = e?.target?.value
        setSearchText(value)    
    }

    const handleSearch = () => {
        dispatch(searchProduct(searchText))
        
        if(window?.location?.pathname !== '/'){
            navigate('/')
        }
    }

    console.log(searchText)

    return(
        <div className="navbar-container">
            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <h1 className="navbar-brand-name navbar-text" onClick={handleLogoClick}>Eshop</h1>
            <input type="text" name="text" placeholder="search Product..." style={{width:'300px', height:'25px', paddingLeft:'10px'}} onChange={handleInputChange} value={searchText}></input>
            <button style={{width:'100px', height:'30px', backgroundColor:'#FFD814', marginLeft:'10px', border:'1px #FFD814', borderRadius:'1px'}} onClick={handleSearch}>Search</button>
            </div>
            <h2 className="navbar-text navbar-cart" onClick={handleCartClick}>Cart : {cartDataCount}</h2>
        </div>
    )
}

export default NavBar