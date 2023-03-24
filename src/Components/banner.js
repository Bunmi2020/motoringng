

import './banner.css';
import hero from '../media/image/hero.png';
import hero1 from '../media/image/hero1.png';
import hero2 from '../media/image/hero2.png';
import hero3 from '../media/image/hero3.png';

function Banner () { 
  return (

    <div className="App-banner" >
          <div className="App-banner-body">

            <div className="App-hero-text-container">

              <div className="App-hero-text">
                    <h3>Tow your vehicle <br/><span className='h-red'>easily and fast</span></h3>
                    <p>Towing Your Vehicle Just Got Simpler!
                        Vehicle breakdowns are exhausting, getting towed is easy. We will arrive in 15-30 minutes.</p>
                    <button><a href="tel:+2349166859614" >Tow Now</a></button>
                    
              </div>
            </div>

              <div className='App-hero'>

                  <div className='App-hero-hang' >
                    
                    <div className='App-hero-right'>

                        <div className='App-hero1'>
                            <img src={hero2} alt='M' className='hero-m' style={{background: 'rgba(227, 93, 106, 0.25)'}}/>
                              <div className='hero-text'>
                                <h5 style={{color: '#E35D6A'}}>A Call Away</h5>
                                <p>We are always a call away from delivering the best service to you</p>
                              </div>
                        </div>

                        <div className='App-hero3'>
                          <img src={hero1} alt='M' className='hero-m' style={{background: 'rgba(77, 212, 172, 0.25)'}}/>
                            <div className='hero-text'>
                              <h5 style={{color: '#4DD4AC'}}>Customer Service</h5>
                              <p>Our support are ready to have your issues resolved in no time</p>
                            </div>

                        </div>
                    </div>
                      
                        <div className='App-hero2'>
                          <img src={hero3} alt='M' className='hero-m' style={{background: 'rgba(140, 104, 205, 0.14)'}}/>
                            <div className='hero-text'>
                              <h5 style={{color: '#8C68CD'}}>Swift Pick up</h5>
                              <p>your vehicle gets picked up in the shortest time possible</p>
                            </div>
                        </div>

                  

                  </div>


                  <img src={hero} alt='Motoring-NG' className='motor'/>

              </div>
              

            </div>

        </div>
    
  );
}

export default Banner;
