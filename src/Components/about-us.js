import React from 'react';
import about from '../media/image/about-main.png'

import './about-us.css'

const About = () => {
    
  return (
    
    <div className='about' id='about'>
     <h3 className='about-heading'>About Us</h3>
     
     <div className="App-about">

            
            
            <div className="App-about-text">

                <h3>Towing your vehicle<br/> just <span className='h-red'>got easier</span></h3>
                <p>Motoring Nigeria offers the best services when it comes to towing vehicles. We pride ourselves on efficient and timely service delivery. And our charges have proven to be the best when compared to our competitors, in terms of quality of service and cost. We haul and deliver vehicles locally and interstate! We also rescue vehicles across Lagos! </p>
                <button><a href="tel:+2347037980096" >Call Us Now</a></button>
                
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