import React from 'react';

import './hero.style.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Sajjan from '../../assets/images/s1.jpg';
import { Link } from 'react-router-dom';

export const Hero = () => {
   return (
      <div className="hero">
         <Container>
            <Row className="py-3">
               <Col md="7">
                  <div id="info">
                     <p className="mt-2 mb-3 text-white">
                        <span className="intro">Hi I'm </span>
                        <span className="name">Sajjan Pyakurel. </span>
                     </p>
                     <p className="bio text-white pt-4">
                        I am a passionate and an enthusiastic learner. I am a professional photographer. I love to design and
                        develop.
                     </p>
                     <div className="hire-about py-2">
                        {/* <Button className="hire me-4">My projects</Button> */}
                        <Link to="/Projects">
                           <Button>
                           
                              <i className="fas fa-camera me-3 text-dark">  </i>
                        
                                 My projects
                     
                           </Button>
                        </Link>
                     </div>
                  </div>
               </Col>
               <Col md="5">
                  <div className="pt-4">
                     <img src={Sajjan} width="85%" height="90%" alt="heroimg" />
                  </div>
               </Col>
            </Row>
            <div className="ContactLists">
              
               <a 
                  href=""
                  target="_blank"
                  rel="noreferrer"
               >
                  <i className="fab fa-linkedin "></i>{' '}
               </a>
               <a
                  href="https://www.instagram.com/sazza_n/"
                  target="_blank"
                  rel="noreferrer"
               >
                  {' '}
                  <i className="fab fa-instagram"></i>
               </a>
               <a
                  href="https://www.facebook.com/sazzanshutterspeed"
                  target="_blank"
                  rel="noreferrer"
               >
                  {' '}
                  <i className="fab fa-facebook-square"></i>
               </a>
            </div>
         </Container>
      </div>
   );
};
