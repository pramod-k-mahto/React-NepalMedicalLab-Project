import { NavLink } from 'react-router-dom'
// import { appContext } from '.';
// import { useEffect, useState,useContext } from 'react';
import './Links.css';
function Links(props) {
    // const {context,m}=useContext(appContext);


    return (
        <div className='navbar'>
            {/* logo */}

            <div className='logo'>
            </div>
             <span className='npl'>Nepal Medical Lab </span>
            <div className='menu'>
                <ul >
                    {/* <li><span className='npl'>Nepal Medical Lab </span></li> */}
                    <li>< input type="text" name="" id="search" placeholder='Search'/></li>
                   <li><button>Search</button></li>
                    <li><NavLink className='navlink' to='/' >Home</NavLink></li>
                    <li><NavLink className='navlink' to='/About' >About</NavLink></li>
                    <li><NavLink className='navlink' to='/Contact' >Contact</NavLink></li>
                    <li><NavLink className='navlink' to='/Login' >Login</NavLink></li>
                    <li><NavLink className='navlink' to='/Logout' >Logout</NavLink></li>
                    <li><NavLink className='navlink' to="/Cart" >Cart Item-No.{props.Number}</NavLink></li>
                </ul>

            </div>




        </div>
    )
}
export default Links;
