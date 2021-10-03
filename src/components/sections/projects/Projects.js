import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Title } from '../../section-title/Title';
import monk from '../../../assets/images/s2.jpg';
import temple from '../../../assets/images/s9.jpg';
import car from '../../../assets/images/s4.jpg';
import man from '../../../assets/images/s5.jpg';
import man1 from '../../../assets/images/s6.jpg';
import girl from '../../../assets/images/s7.jpg';
import road from '../../../assets/images/s10.jpg';
import coffee from '../../../assets/images/s11.jpg';
import lakhe from '../../../assets/images/s13.jpg';
import drink from '../../../assets/images/s8.jpg';
import window from '../../../assets/images/s12.jpg';

import waterfall from '../../../assets/images/waterfall.jpg';
import sunset from '../../../assets/images/sunset.jpg';
import flower from '../../../assets/images/flower.jpg';
import bird from '../../../assets/images/bird.jpg';

import './projects.style.css';
import { TopNavbar } from '../../header/Navbar';

export const Projects = () => {
   return (
      <Container fluid>
         <Row>
           

      <div id="Projects" className="projects">
        
            
         <img src={temple} height="300vh"  alt="Logo" />
            
         <img src={road} height="300vh"  alt="Logo" />
            
       
            
     
         <img src={waterfall} height="300vh"  alt="Logo" />
         <img src={sunset} height="300vh"  alt="Logo" />
         <img src={bird} height="300vh"  alt="Logo" />
         <img src={flower} height="300vh"  alt="Logo" />
            
         <img src={coffee} height="300vh"  alt="Logo" />
         <img src={lakhe} height="300vh"  alt="Logo" />
         <img src={girl} height="300vh"  alt="Logo" />
         <img src={man1} height="300vh"  alt="Logo" />
         <img src={man} height="300vh"  alt="Logo" />
         <img src={car} height="300vh" alt="Logo" />
               

         <img src={window} height="300vh"  alt="Logo" />
       
      
      


         </div>
       
         </Row>
         </Container>
   );
};
