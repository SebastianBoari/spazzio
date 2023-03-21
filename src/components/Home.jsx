import React from 'react';
import CallToAction from './CallToAction';
import Gallery from './Gallery';

const Home = () => {
  return (
    <section id='home'>
      <article id='welcome'>
        <div className='welcome__container'>
          <div id='welcome__left'>
            <div className='left__header'>
              <h1>Spazzio</h1>
              <div id='line'></div>
              <p>Muebles de oficina, una experiencia premium a un precio increible.</p>
            </div>
            <CallToAction />
          </div>
          <Gallery />
        </div>
      </article>
    </section>
  );
};

export default Home;