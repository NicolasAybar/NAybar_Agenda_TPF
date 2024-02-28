import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../../assets/images/codigo1.png';
import imagen2 from '../../assets/images/codigo5.jpg';
import imagen3 from '../../assets/images/codigo6.jpg';
import './Carrusel.css';

const Carrusel = () => {
    return(
        <>
         <Carousel>
      <Carousel.Item>
        <img src={imagen1} alt='' className='fotoCarr'/>
        <Carousel.Caption>
          <h3>React libreria de Js</h3>
          <p>Es una biblioteca para construir aplicaciones web en forma agil.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <img src={imagen2} alt='' className='fotoCarr'/>
        <Carousel.Caption>
          <h3>Full stack</h3>
          <p>se encarga de crear y mantener las partes de front y back end de una aplicación web, con polivalencia para el conocimiento de lenguajes de programación y sistemas operativos. Su objetivo es coordinar los procesos de desarrollo y producción de software.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={imagen3} alt='' className='fotoCarr'/>
        <Carousel.Caption>
          <h3>Front end</h3>
          <p>
          aquello que ven los usuarios e incluye elementos visuales, como botones, casillas de verificación, gráficos y mensajes de texto. Permite a los usuarios interactuar con la aplicación.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )
}

export { Carrusel }