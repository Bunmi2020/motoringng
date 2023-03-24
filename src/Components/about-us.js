import React from 'react';
import about from '../media/image/about-main.png';
import { Link } from 'react-router-dom';

import './about-us.css';

const About = () => {
    
  return (
    
    <div className='about' id='about'>
     <h3 className='about-heading'>About Us</h3>
     
     <div className="App-about">

            
            
            <div className="App-about-text">

                <h3>Towing your vehicle<br/> just <span className='h-red'>got easier</span></h3>
                <p>Motoring Nigeria is a company committed to providing a broad spectrum of automotive related
solutions to our individual and corporate customers. We have gradually gathered industry
expertise since 2014 and served our customers in the areas of vehicle roadside assistance, long
distance vehicle haulage/towing, vehicle sales, auctions and automotive events. Our renewed commitment in 2023 is to continue to provide tailored solutions to our customers and exceed
their expectations with impeccable customer service.</p>
                <button><Link to="#contact">Tow Now</Link></button>
                
            </div>
            
            <div className='App-about-image' style={{position: 'relative', width: '450px', height: '450px', background: ' #262C71', borderRadius: '360%'}}>

                <div className='App-about-mini' style={{position: 'relative', width: '270px', height: '270px', background: ' #F0FAFE', borderRadius: '360%', top: '190px', bottom: '0px', margin: 'auto'}}>
                    <img src= {about} alt='about Motoring Nigeria' style={{position: 'relative', width: '283px', height: '383px', top: '-121px', left: '-7px', bottom: '0px', margin: 'auto'}}/>
                    
                </div>
                    
                
            </div> 

            <div className='App-about-image-mobile' style={{position: 'relative', width: '275px', height: '275px', background: ' #262C71', borderRadius: '360%'}}>

              <div className='App-about-mini-mobile' style={{position: 'relative', width: '170px', height: '170px', background: ' #F0FAFE', borderRadius: '360%', top: '115px', bottom: '0px', margin: 'auto'}}>
                  <img src= {about} alt='about Motoring Nigeria' style={{position: 'relative', width: '171px', height: '226px', top: '-63px', left: '0px', bottom: '0px', margin: 'auto'}}/>
                  
              </div>
    
            </div>

            


    </div>
        
    </div>
  )
        
};

export default About;