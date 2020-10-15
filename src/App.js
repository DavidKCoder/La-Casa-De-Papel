import React from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Episodes from './components/Episodes';
import Actores from './components/Actores';
import About from './components/About';
import Video from './components/Videos';
import Cast from './components/Cast';
import Awards from './components/Awards';
import Footer from './components/Footer';
import Animation from './components/Animation';


function App() {
  return (
    <div className="App">
      <Header />
      {/*--- Carousel --- */}
      <Carousel />
      {/*--- Episodes --- */}
      <Episodes />
      {/*--- Videos --- */}
      <Video />
      {/*--- Actores --- */}
      <Actores />
      {/*--- About --- */}
      <About />
      {/*--- Awards --- */}
      <Awards />
      {/*--- Cast --- */}
      <Cast />
      {/*--- Animation --- */}
      <Animation />
      {/*--- Footer --- */}
      <Footer />
    </div>
  );
}

export default App;
