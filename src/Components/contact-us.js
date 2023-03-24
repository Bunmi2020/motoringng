import React from 'react';

import './contact-us.css';
import ContactForm from './contactform';
import ContactWhatsApp from './contactformmobile';

const Contact = () => {
    
  return (
    
    <div className='contact' id='contact'>
          
       

            <div className="App-contact-form" id='desktop'>
            <h3 className='contact-heading'>Want your vehicle moved?</h3>
               <ContactForm /> 
                
            </div>
            <div className="App-contact-form" id='mobile'>
            <h3 className='contact-heading'>Want your vehicle moved?</h3>
              
               <ContactWhatsApp /> 
                
            </div>
            
            
        
    </div>
  )
        
};

export default Contact;