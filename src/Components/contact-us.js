import React from 'react';
import contact1  from '../media/image/contact1.png';
import contact21 from '../media/image/contact21.png';
import contact22 from '../media/image/contact22.png';
import contact3 from '../media/image/contact3.png';


import tw from '../media/image/twitter1.png';
import fb from '../media/image/facebook1.png';
import ins from '../media/image/instagram1.png';
import './contact-us.css';
import ContactForm from './contactform';

const Contact = () => {
    
  return (
    
    <div className='contact' id='contact'>
        
        <h3 className='contact-heading'>Reach Out to Us</h3>
        
        <div className="App-contact">

            <div className="App-contact-form">
               <ContactForm /> 
                
            </div>
            
            <div className='App-contact-details' >

                    <div className='contact1'>
                    <div className='contact-icon' style={{background: '#FD9843'}}>
                        <img src={contact1} alt='towing order' />
                    </div>
                
                <h5  className='contact-header'>Address</h5>
                <p className='contact-text'>18B, Orunbe Close, Alfred Rewane Crescent.
                        P.O Box 1799</p>
                </div>

                <div className='contact2'>
                    <div className='contact2-1'>
                    <div className='contact-icon' style={{background: '#4DD4AC'}}>
                         <img src={contact21} alt='towing vehicle' />
                    </div>
                       
                        <h5 className='contact-header'>Phone number</h5>
                        <p className='contact-text' style={{ minWidth: '120px'}}>0817 972 3299</p>
                    </div>

                    <div className='contact2-2'>
                        <div className='contact-icon' style={{background: '#2E63EA'}}>
                            <img src={contact22} alt='towing vehicle' />
                        </div>
                        
                            <h5 className='contact-header'>Email</h5>
                            <a href='mailto:hello@motoringnigeria.com' className='contact-text'>hello@motoringnigeria.com</a>
                    </div>

                </div>

                <div className='contact3'>
                    <div className='contact-icon' style={{background: '#F46036'}}>
                        <img src={contact3} alt='towing delivery' />
                    </div>
                    <h5  className='contact-header'>Socials</h5>
                    
                    <span className='socials'>
               
                            <a href="https://twitter.com/knowtime_cl" target="_blank" rel="noreferrer"><img src={tw} alt="twitter" /></a>
                            <a href="https://www.facebook.com/knowtimecl" target="_blank" rel="noreferrer"><img src={fb} alt="facebook" /></a>
                            <a href="https://www.instagram.com/knowtime-cl" target="_blank" rel="noreferrer"><img src={ins} alt="linkedIn" /></a>

                    </span>
                </div>
                
            </div> 

        </div>
        
    </div>
  )
        
};

export default Contact;