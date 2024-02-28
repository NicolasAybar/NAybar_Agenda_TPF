import React, {useState} from "react";
import "./Menu.css"
import logoImg from '../../assets/images/tamandua.jpg';
import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom';
import {Home,SearchComponent,Footer} from '../index.js';

const Menu = () => {
    
    
   
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
        <BrowserRouter>
        <div className="navbar">
            <div className="nav_logo"> 
            <img src={logoImg} className="logoFoto"/>
             </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <NavLink className='Resaltar' to='/'>Home</NavLink>
                <NavLink className='Resaltar' to='agenda'>Agenda</NavLink>
                
                
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="agenda" element={<SearchComponent/>}/>
            
        </Routes>
        </BrowserRouter>
        <Footer/>
        </>
    )
}
export default Menu