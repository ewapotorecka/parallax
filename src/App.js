import './App.css';
import ParallaxElement from './components/ParallaxElement';
import MyParallax from './components/ReactParallax';

function App() {
  return (
    <div className="App">
		<link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Comforter+Brush&display=swap" rel="stylesheet"></link>
		<MyParallax/>
     {/* <ParallaxElement blur={40} strength={140}><p>ddd</p></ParallaxElement> */}
    </div>
  );
}

export default App;
