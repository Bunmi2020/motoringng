import React from 'react';

import trust1 from '../media/image/trust1.png';
import trust2 from '../media/image/trust2.png';
import trust3 from '../media/image/trust3.png';
import trust4 from '../media/image/trust4.png';
import trust5 from '../media/image/trust5.png';
import Rating from './ratings';

import './reputation.css'

const Reputation = () => {
    
  return (

    <div className='reputation' id='reputation'>
            
            <div className='trust-container'>
                    <h3>Brands that trusts us</h3>

                    <div className='trust-body'>
                    
                        <div className='trust'>
                            <img src={trust1} alt='towing order' style={{width: '71px', height: '71px'}}/>
                        </div>

                        <div className='trust'>
                            
                                <img src={trust2} alt='towing vehicle' style={{width: '155px', height: '42px'}}/>
                        </div>

                        <div className='trust'>
                            
                            <img src={trust3} alt='towing delivery' style={{width: '80.36px', height: '71px'}}/>
                        </div>
                        <div className='trust'>
                            
                            <img src={trust4} alt='towing delivery' style={{width: '144px', height: '45px'}}/>
                        </div>
                        <div className='trust'>
                            
                            <img src={trust5} alt='towing delivery' style={{width: '125.35px', height: '71px'}}/>
                        </div>
                    </div>
                
            </div>

            <div className='testimonial'>
                <Rating />
            </div>

           
    </div>
  )
        
};

export default Reputation;