import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styled from 'styled-components';
import unicorn from '../assets/unicorn.png';
import unicornSad from '../assets/unicorn2.png';
import rainbow from '../assets/rainbow.png';
import squid from '../assets/squid.png';
import fish from '../assets/fish.png';
import prawn from '../assets/prawn.png';
import octopus from '../assets/octopus.png';
import cow from '../assets/cow.png';
import hen from '../assets/hen.png';
import pig from '../assets/pig.png';
import turkey from '../assets/turkey.png';


const Title = styled.p`
	margin-top: 6rem;
	margin-left: 2rem;
	font-family: 'Comforter Brush', cursive;
	font-size: 4rem;
`;

const WideTitle = styled(Title)`
	letter-spacing: 5px;
	word-spacing: 20px;
`;

export default function App() {
  return (
	<div style={{ width: '100%', height: '400vh', backgroundImage: 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)' }}>
      <Parallax pages={5}>
		<ParallaxLayer offset={0.7} speed={-0.2}>
  			<img src={rainbow} style={{ width: '20%', marginLeft: '3rem', marginTop: '18rem' }} />
		</ParallaxLayer>
		<ParallaxLayer offset={0.7} speed={1}>
  			<Title>The world can be a better place</Title>
		</ParallaxLayer>
		<ParallaxLayer offset={0} speed={-1}>
			<img src={unicornSad} width={'100px'} style={{marginTop: '400px', marginRight: '300px'}}/>
		</ParallaxLayer>
		<ParallaxLayer offset={1} speed={-0.3}>
			<img src={unicorn} width={'100px'} style={{marginTop: '400px', marginRight: '300px'}}/>
		</ParallaxLayer>
		<ParallaxLayer offset={2.3} speed={-0.1}>
			<Title>Full of happy creatures</Title>
		</ParallaxLayer>
		<ParallaxLayer offset={3.5} speed={-0.1}>
			<img src={prawn} width={'150px'} style={{marginLeft: '720px'}}/>
		</ParallaxLayer>
		<ParallaxLayer offset={2.1} speed={0.3}>
			<img src={octopus} width={'200px'}  style={{marginLeft: '970px'}}/>
		</ParallaxLayer>
		<ParallaxLayer offset={2.8} speed={-0.6}>
			<img src={squid} width={'100px'} style={{marginRight: '450px'}}/>
		</ParallaxLayer>
		<ParallaxLayer offset={2.4} speed={0.9}>
			<img src={fish} width={'300px'} style={{marginRight: '750px'}}/>
		</ParallaxLayer>
		<ParallaxLayer offset={3.4} speed={-0.1}>
			<Title>If you understand one thing...</Title>
		</ParallaxLayer>
		<ParallaxLayer offset={4.2} speed={-0.1} factor={3}>
			<WideTitle>FRIENDS   NOT   FOOD</WideTitle>
		</ParallaxLayer>
		<ParallaxLayer offset={4.6} speed={-0.6}>
			<img src={cow} width={'250px'} style={{marginLeft: '720px'}}/>
		</ParallaxLayer>
		<ParallaxLayer offset={4.1} speed={0.7}>
			<img src={hen} width={'100px'}  style={{marginLeft: '970px'}}/>
		</ParallaxLayer>
		<ParallaxLayer offset={4.5} speed={-0.4}>
			<img src={pig} width={'300px'} style={{marginRight: '450px', marginBottom: '100px'}}/>
		</ParallaxLayer>
		<ParallaxLayer offset={4.4} speed={-0.5}>
			<img src={turkey} width={'100px'} style={{marginRight: '850px'}}/>
		</ParallaxLayer>
      </Parallax>
	  </div>

  )
}
