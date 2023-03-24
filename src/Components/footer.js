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
                
            </div>


            <div className='footer-body'>

                <div className='footer-contact' id='contact-us'>
                    <div className='contact-add'>
                     
                        <h1>Contact Us</h1>
                        <li><i className='fa fa-map-marker'></i>Km 14, Lekki-Epe Expressway, Ologolo bus stop Lekki, Lagos State.</li>
                        <li style={{ minWidth: '150px'}}><i className='fa fa-phone '></i>+234 916 685 9614</li>
                        <li href='mailto:contact@motoringnigeria.com'><i className='fa fa-envelope'></i>contact@motoringnigeria.com</li>
                    </div>

                    <div className='connect'>
                        <h2>Connect</h2>
                        <div className='socials'>
                            <a href="https://mobile.twitter.com/motoringnigeria" target="_blank" rel="noreferrer"><img src={tw} alt="twitter" /></a>
                            <a href="https://m.facebook.com/motoringnigeria/" target="_blank" rel="noreferrer"><img src={fb} alt="facebook" /></a>
                            <a href="https://www.instagram.com/motoringnigeria/?hl=en" target="_blank" rel="noreferrer"><img src={ins} alt="linkedIn" /></a>

                        </div>
                    </div>
                </div>

                <div className='footer-company'>
                    <h1>Company</h1>
                    <li><Link to="/#about">About Us</Link></li>
                    <li><Link to="/#rating">Testimonials</Link></li>
                    <li><Link to="/#">Partners</Link></li>
                    <li><Link to="/#">Terms and Conditions</Link></li>

                </div>

                <div className='footer-services'>
                    <h1>Service</h1>
                    <li><Link to="/#">Emergency Towing</Link></li>
                    <li><Link to="/#">Road side assistance</Link></li>
                    <li><Link to="/#">Local Towing</Link></li>
                    <li><Link to="/#">Interstate Towing</Link></li>
                    <li><Link to="/#reputation">Luxury Vehicle Transport</Link></li>
                   
                </div>

            </div>

                <span className='divider' style={{}}> </span>

           
            
                <div className='copyrights'>
                <p>&copy; 2023 Motoring Nigeria. All rights reserved</p>
                </div>
               
    </div>
  )
};

export default Footer;