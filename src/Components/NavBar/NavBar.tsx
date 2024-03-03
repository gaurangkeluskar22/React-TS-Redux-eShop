import React from "react"
import './NavBar.css'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import EshopState from "../../types/EshopState"


const NavBar  : React.FC = () => {
    const navigate = useNavigate()
    const cartDataCount = useSelector((state : EshopState)=> state.Cart.count)

    const handleLogoClick = () => {
        navigate('/')
    }

    const handleCartClick = () => {
        navigate('/cart')
    }

    return(
        <div className="navbar-container">
            <h1 className="navbar-brand-name navbar-text" onClick={handleLogoClick}>Eshop</h1>
            <h2 className="navbar-text navbar-cart" onClick={handleCartClick}>Cart : {cartDataCount}</h2>
        </div>
    )
}

export default NavBar