import logo from '../../assets/logo.png'
import { FaChevronDown, FaSearch, FaRegUser, FaShoppingCart, FaOpencart } from "react-icons/fa";
import { MdOutlineLocalOffer, MdHelpOutline, MdOutlineShopping } from "react-icons/md";
import './Navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    // const [searchInput , setSearchInput] = useState("")
    return (
        <>
            <nav className="navbar">
                <div className="left-nav">
                    <Link to='/'>

                        <img src={logo} alt="" className="nav-logo" />
                    </Link>
                </div>

                <div className="right-nav">
                    <ul className="right-nav-list">
                        <li><MdOutlineLocalOffer />Offers</li>
                        <Link to="/help">

                    <li><MdHelpOutline />Help</li> 
                        </Link>
                            <li><FaRegUser /> Sign in</li>
                            <li >Cart <FaOpencart /></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar