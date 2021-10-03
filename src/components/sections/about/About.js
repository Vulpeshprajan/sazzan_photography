import React from 'react';
import { Title } from '../../section-title/Title';
import { Container, Row, Col } from 'react-bootstrap';

import './about.style.css';
import sajjan from '../../../assets/images/s1.jpg';
import { TopNavbar } from '../../header/Navbar';

export const About = () => {
   return (
      <div id="About" className="about">
         <Container>
            <Row className="py-5">
               <Col>
                  <Title title="About Me" />
               </Col>
            </Row>
            <Row className="">
               <Col md="7">
                  <div className="py-2 about-description text-center">
                     <p >
                     I am a professional photograpther with the experience of 
                     </p>
                  </div>
               </Col>
               <Col md="5">
                  <div className="pro-img mt-3">
                     <img
                        className="img-responsive"
                        src={sajjan}
                        width="90%"
                        height="100%"
                        alt=""
                     />
                  </div>
               </Col>
            </Row>
         </Container>
        
      </div>
   );
};
