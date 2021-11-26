import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';



function HeroSection() {
    return (
        <div className='hero-container'>
        <video src="./Videos/vid.mp4" autoPlay loop muted/>
        <h1>Events Awaits</h1>
        <p>Join The Joy!</p>
        <div className="hero-btns">
            <Button className="btns"
             buttonStyle="btn--outline"
            buttonSize="btn--large">
                EVENTS
            </Button>
        
        </div>

            
        </div>
    )
}

export default HeroSection;


/* use useEffevt and useState
try to find some dummy data to fetch */