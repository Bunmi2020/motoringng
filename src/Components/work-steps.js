import React from 'react';

import step1 from '../media/image/step1.png';
import step2 from '../media/image/step2.png';
import step3 from '../media/image/step3.png';
import './work-steps.css'

const Steps = () => {
    
  return (
    <div className='work-steps-container' id='work-steps'>
    <div className='work-steps' id='work-steps'>
     <h3 >How it works</h3>

     <div className='work-steps-body'>
     
      <div className='step1'>
          <img src={step1} alt='towing order' className='services-icon'/>
          <h5 style={{backgroundColor: '#c3c5d3', borderRadius: '360px', color: '#262C71'}} className='services-header'>01</h5>
          <p className='services-text'>Place a request for your vehicle to be towed.</p>
        </div>

        <div className='step2'>
        
        <img src={step2} alt='towing vehicle' className='services-icon'/>
          <h5 style={{backgroundColor: '#d3c6cc', borderRadius: '360px', color: '#DE5C9D'}} className='services-header'>02</h5>
          <p className='services-text'>Nearest Motoring Nigeria' truck picks up your request.</p>
        </div>

        <div className='step3'>
          
          
          <img src={step3} alt='towing delivery' className='services-icon'/>
          <h5 style={{backgroundColor: '#dfeee9', borderRadius: '360px', color: '#4DD4AC'}} className='services-header'>03</h5>
          <p className='services-text'>Your vehicle gets towed to its destination.</p>
        </div>
      </div>
        
    </div>
    </div>
  )
        
};

export default Steps;