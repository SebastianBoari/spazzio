import React from 'react';
import aboutusImg1 from '../assets/img/aboutus-img-1.png';
import aboutusImg2 from '../assets/img/aboutus-img-2.png';
import aboutusImg3 from '../assets/img/aboutus-img-3.png';
import aboutusImg4 from '../assets/img/aboutus-img-4.png';
import aboutusImg5 from '../assets/img/aboutus-img-5.png';

const AboutUs = () => {
  return (
    <>
    <section id='aboutUs__spazzio'>
      <div className='spazzio__container'>
        <article id='spazzio__history'>
          <div className='history__top'>
            <div className="top__container">
              <h1 className='history__title'>Jorge Anibal Spazzio</h1>
              <p className='history__bio'>Fundador de Spazzio Muebles. Nació en Corrientes, Argentina, un 8 de abril de 1949. Hijo de inmigrantes italianos: Benito Spazzio y Maria Verinisi. Su gusto por trabajar la madera y el metal fue adquirido de su padre mientras trabajaba de hachero en Paso de los Libres. Más tarde, en busca de nuevas oportunidades, su familia se mudó a Chajarí donde daría comienzo a esta historia.</p>
            </div>
            <figure className='history__figure'>
              <img className='figure__img' src={aboutusImg1} alt="Foto de Jorge Anibal Spazzio" />
            </figure>
          </div>
          <div className='history__quote'>
            <p className='quote__txt'>"Todo empezó un verano de 1982 en Chajarí, Entre Ríos, en un taller chiquito que tenía con mi papá, donde él hacía sus propias tranqueras y forjaba sus cadenas. Cuando el carpintero de la zona se fue, vi la oportunidad de hacer muebles para las familias vecinas para poder conseguir algún dinero. Fue todo un éxito, en poco tiempo muchas casas de la zona tenían muebles hechos por mí."</p>
          </div>
        </article>
        <article id='spazzio__workshop'>
          <figure className='workshop__figure'>
            <img className='figure__img' src={aboutusImg2} alt="Foto de un viejo taller" />
          </figure>
          <div className='workshop__history'>
            <p className='history__txt'>Taller original en Chajari, fue remodelado en el año 1992 y finalmente cayo en desuso en el año 2007 (año en el que fue inaugurada nuestra actual fabrica). Desde entonces permanece en su estado original mantenido por sus hijos y actuales dueños.</p>
          </div>
        </article>
        <article id='spazzio__bio'>
          <div className='bio__history'>
            <p className='history__txt'>Foto de Jorge Anibal Spazzio tomada el 11 de abril de 2019 en su taller donde trabaja sobre un tallado.</p>
          </div>
          <figure className='bio__figure'>
            <img className='figure__img' src={aboutusImg3} alt="Foto de Jorge Anibal Spazzio trabajando." />
          </figure>
        </article>
      </div>
    </section>

    <section id='aboutUs__industrial'>
      <div className="industrial__container">
        <article className='industrial__plant'>
          <div className='plant__text'>
            <p className='text__p'>Contamos con una planta de más de 800 m² cubiertos y dos centros de distribución que nos permiten llegar a donde estés a través de nuestros colaboradores revendedores.</p>
          </div>
          <figure className='plant__figure'>
            <img className='figure__img' src={aboutusImg4} alt="" />
          </figure>
        </article>

        <article className='industrial__design'>
          <figure className='design__figure'>
            <img className='figure__img' src={aboutusImg5} alt="" />
          </figure>
          <div className='design__text'>
            <p className='text__p'>Trabajamos en conjunto con un equipo de diseñadores industriales e ingenieros de distintos países para poder traer lo mejor a la industria nacional a un precio asequible y con la mejor calidad del mercado.</p>
          </div>
        </article>

      </div>
    </section>
    </>
  );
};

export default AboutUs;