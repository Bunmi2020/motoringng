
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
  return ( 
    <div className="App">
      
        <div className="up-cursor"><Link to="#home"><img src={up} alt='top' style={{ width: '35px',  position: 'fixed', zIndex: 9, boxShadow: '3px, 2px, gray',
        bottom: '0%',
        display: 'flex',
        right: '2%',
        
        padding: '1.5vh 3.5vh'}}/></Link>
      </div>
      
      <Header />
      
      <Steps id='work-steps'/>
      <About id='about'/>
      <Reputation id='reputation'/>
      <Contact id='contact'/>
      <Footer id='footer'/>

    </div>
  );
}

export default Home;
