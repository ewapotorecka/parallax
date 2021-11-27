import React from 'react';
import { Parallax, Blur } from '@react-spring/parallax';
import snow from '../assets/snow.jpg';


const ParallaxElement = () => {
	return (  <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('../assets/rainbow-background.jpg')}
        bgImageAlt="the dog"
        strength={-200}
    >
        Blur transition from min to max
        <div style={{ height: '200px' }} />
    </Parallax>);
}

export default ParallaxElement;