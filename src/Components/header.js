import React, { useState, useEffect } from 'react';
import './header.css';
import menu from '../media/image/menu-bar.png';
import logo from '../media/image/logo.png';

import { Link } from 'react-router-dom';
import Banner from './banner';

function Header () {

  const [isToggle, setIsToggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
 
   /*  to toggle back mobile menu display upon screen size change*/
   useEffect(() => {
     const handleResize = () => {
       setScreenWidth(window.innerWidth);
     };
 
     window.addEventListener('resize', handleResize);
 
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []);
 
   useEffect(() => {
     if (screenWidth > 650) {
       setIsToggle(false);
     }
   }, [screenWidth]);
 
 
   /* when other part of the page is clicked and menu is open, it will close. 
   the square bracket is to ensure that the function unmounts after initial click
   so the menu button can reopen the menu when clicked again*/
 
   window.addEventListener ('mouseup', function (event) {
     let menu = document.getElementById('menu');
     if (event.target !== menu && event.target.parentNode !== menu && isToggle ) {
       menu.style.display='none';
     }
     });
 
 
  return ( 
   
      <header className="App-header" >
<p id='home' style={{display: 'hidden'}}></p>
        <div className="App-nav">

            <div className='App-logo' >
            <Link to="/#" ><img src={logo} alt='Motoring-NG'/></Link>
            </div>


          <div className='App-menu'>

            <div
                        className="mobile-menu-button"
                       onClick={() => {setIsToggle(!isToggle);}} 
                        style={{width: '45px', height: '30px', background: 'none'}}> 
                        <img src={menu} alt='Menu' style={{width: '30px', height: '25px'}} /> 
              </div>
           
              <div className='desktop-menu'>  
                <li><Link to="#work-steps">How it works</Link></li>
                <li><Link to="#about">About</Link></li>
                <li><Link to="#reputation">Testimonial</Link></li>
                <li><Link to="#contact">Contact</Link></li>
            
              </div>
             
            </div>


        </div>

        <Banner id='home' />

        <div className='mobile-menu' style={{display: isToggle? 'block': 'none'}}
                        id="menu"> 
                <li><Link to="#work-steps">How it works</Link></li>
                <li><Link to="#about">About</Link></li>
                <li><Link to="#reputation">Testimonial</Link></li>
                <li><Link to="#contact">Contact</Link></li>
                
        </div>

       
      </header>
    
  );
}

export default Header;
