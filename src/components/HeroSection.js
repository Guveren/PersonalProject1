import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';


function HeroSection(){

  return(
    <div className="hero-container" >
      <video src="/Users/nguveren/Documents/pWebsite/personal-project1/src/components/images/video-1.mp4" autoPlay loop muted/>
      <h1>Pray without ceasing</h1>
      <p> 1 Thessalonians 5:17</p>
      <div className='hero-btns'>
        <Button className= 'btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          Pray anonymously
        </Button>


        <Button className= 'btns' buttonStyle='btn--primary' buttonSize='btn--large'>
         Add to your prayerlist
        </Button>
        <form className='input-area'>
          <input
          type='prayer-request'
          name='prayer'
          placeholder='Type in your prayer...'/>
        </form>
      </div>

    </div>
   );
}

export default HeroSection;
