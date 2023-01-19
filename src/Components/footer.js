import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../media/image/footer-logo.png';

import tw from '../media/image/twitter.png';
import fb from '../media/image/facebook.png';
import ins from '../media/image/instagram.png';

import './footer.css'

const Footer = () => {
    
  return (
    
    <div className='footer' id='footer'>
            <div className='footer-conclusion'>
                <img src={logo} alt='Motoring-NG' style={{minWidth: '10vw', maxWidth:'100px', margin: 'auto 0%'}}/>
                <p>Motoring Nigeria is a towing service and motoring company that is tasked with giving the best and fastest services to the public in need of towing and motoring services and purchase</p>

            </div>

            <div className='footer-menu'>
                <li><Link to="/#home">Home</Link></li>
                <li><Link to="/#work-steps">How it works</Link></li>
                <li><Link to="/#about">About</Link></li>
                <li><Link to="/#reputation">Testimonial</Link></li>
                <li><Link to="/#contact">Contact</Link></li>

            </div>

                <span className='divider' style={{}}> </span>

            <div className='footer-socials'>
            
                <div className='copyrights'>
                <p>&copy; 2022 Motoring Ng. All rights reserved</p>

                </div>

                <div className='socials'>
                    <a href="https://twitter.com/knowtime_cl" target="_blank" rel="noreferrer"><img src={tw} alt="twitter" /></a>
                    <a href="https://www.facebook.com/knowtimecl" target="_blank" rel="noreferrer"><img src={fb} alt="facebook" /></a>
                    <a href="https://www.instagram.com/knowtime-cl" target="_blank" rel="noreferrer"><img src={ins} alt="linkedIn" /></a>

                </div>
            </div>
            <div className='footer-phrase'>
                <p>Powered by Motoring Nigeria</p>
            </div>

    </div>
  )
};

export default Footer;