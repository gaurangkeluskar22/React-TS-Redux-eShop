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
            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <h1 className="navbar-brand-name navbar-text" onClick={handleLogoClick}>Eshop</h1>
            <input type="text" name="text" placeholder="search Product..." style={{width:'300px', height:'25px', paddingLeft:'10px'}}></input>
            <button style={{width:'100px', height:'30px', backgroundColor:'#FFD814', marginLeft:'10px', border:'1px #FFD814', borderRadius:'1px'}}>Search</button>
            </div>
            <h2 className="navbar-text navbar-cart" onClick={handleCartClick}>Cart : {cartDataCount}</h2>
        </div>
    )
}

export default NavBar