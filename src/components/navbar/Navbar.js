import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import './navbar.scss'
import {NavbarData} from './NavbarData'
import { IconContext } from 'react-icons'

function Navbar() {
    const[sideBar, setSideBar] = useState(false);

    const openSideBar = () => setSideBar(!sideBar)



    return (
        <>
        <IconContext.Provider value={{color: '#505050'}}>
        <div className='navbar'>
        <Link  to='#' className={sideBar ? 'logoIcActive' : 'logoIc'} onClick={openSideBar}>Logo</Link>
            <nav className={sideBar ? 'menu active' : 'menu'}>
                <div className={sideBar ? 'wrapper active' : 'wrapper'}>
                <ul className='menuList'>
                    <li>
                        <Link to='#' className='logoIcMenu' onClick={openSideBar}>Logo</Link>
                    </li>
                    {NavbarData.map((i, index) => 
                    {
                        return(
                            <li key={index} className={i.cName}>
                                <NavLink to={i.path} className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>
                                    {i.icon}
                                    <span>{i.title}</span>
                                </NavLink>
                            </li>
                        )
                    })}
                    
                </ul>
              
                </div>

            </nav>
            
        </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;
