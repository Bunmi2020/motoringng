import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import About from './Components/about-us';
import Contact from './Components/contact-us';
import Footer from './Components/footer';
import up from './media/image/upped.png';
import Header from './Components/header';

import Reputation from './Components/reputation';
import Steps from './Components/work-steps';

function Home () {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowButton = window.pageYOffset < 200; // change this number as needed
      setIsVisible(shouldShowButton);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return ( 
    <div id= "app" className="App">
      
        <div className="up-cursor" id='myBtn'><Link to="#home"><img src={up} alt='top' style={{ width: '35px', display: isVisible ? 'none' : 'block', position: 'fixed', zIndex: 9, boxShadow: '3px, 2px, gray',
        bottom: '0%',
        right: '0%',
       
        padding: '1.5vh 2.5vh'}}/></Link>
      </div>
      
      <Header />
      <Contact id='contact'/>
      <Steps id='work-steps'/>
      <About id='about'/>
      <Reputation id='reputation'/>
     
      <Footer id='footer'/>

    </div>
  );
}

export default Home;
