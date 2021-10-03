import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { Title } from '../../section-title/Title';
import { SkillsCards } from './SkillsCards';

import './skills.style.css';

export const Skills = () => {
   return (
      <div className="Skills" id="Skills">
         <Container>
            <Row className="pt-5">
               <Col className="skills">
                  <Title title="Skills" />
                  <div className="skillslists d-flex justify-content-around flex-wrap py-4">
                     <SkillsCards
                        cardTitle={
                           <i
                              className="icons fab fa-html5"
                              style={{
                                 color: 'rgb(235, 79, 52)',
                              }}
                           />
                        }
                        cardSubTitle="HTML"
                        cardBar={
                           <ProgressBar
                              now={80}
                              style={{
                                 backgroundColor: 'rgb(235, 79, 52)',
                              }}
                           />
                        }
                     />
                     <SkillsCards
                        cardTitle={
                           <i
                              className="icons fab fa-css3-alt"
                              style={{
                                 color: 'rgb(68, 134, 189)',
                              }}
                           >
                              {' '}
                           </i>
                        }
                        cardSubTitle="CSS"
                        cardBar={
                           <ProgressBar
                              now={80}
                              style={{
                                 backgroundColor: 'rgb(68, 134, 189)',
                              }}
                           />
                        }
                     />
                     <SkillsCards
                        cardTitle={
                           <i
                              className="fab fa-js icons"
                              style={{
                                 color: 'rgb(185, 148, 26)',
                              }}
                           >
                              {' '}
                           </i>
                        }
                        cardSubTitle="Javascript"
                        cardBar={
                           <ProgressBar
                              now={80}
                              style={{
                                 backgroundColor: 'rgb(185, 148, 26)',
                              }}
                           />
                        }
                     />
                     <SkillsCards
                        cardTitle={
                           <i
                              className="fab fa-bootstrap icons"
                              style={{
                                 color: 'rgb(138, 107, 209)',
                              }}
                           >
                              {' '}
                           </i>
                        }
                        cardSubTitle="Bootstrap"
                        cardBar={
                           <ProgressBar
                              now={80}
                              style={{
                                 backgroundColor: 'rgb(138, 107, 209)',
                              }}
                           />
                        }
                     />
                     <SkillsCards
                        cardTitle={
                           <i
                              className="fab fa-react icons"
                              style={{
                                 color: 'rgb(133, 201, 151)',
                              }}
                           ></i>
                        }
                        cardSubTitle="React"
                        cardBar={
                           <ProgressBar
                              now={80}
                              style={{
                                 backgroundColor: 'rgb(133, 201, 151)',
                              }}
                           />
                        }
                     />
                     <SkillsCards
                        cardTitle={
                           <i
                              className="fab fa-node icons"
                              style={{
                                 color: 'rgb(205, 188, 212)',
                              }}
                           ></i>
                        }
                        cardSubTitle="Node"
                        cardBar={<ProgressBar now={80} />}
                     />
                     <SkillsCards
                        cardTitle={
                           <i
                              className="fas fa-database"
                              style={{
                                 color: 'rgb(0, 158, 26)',
                              }}
                           ></i>
                        }
                        cardSubTitle="Mongo DB"
                        cardBar={
                           <ProgressBar
                              now={80}
                              style={{ backgroundColor: 'rgb(0, 158, 26)' }}
                           />
                        }
                     />
                     <SkillsCards
                        cardTitle={
                           <i
                              class="fa fa-puzzle-piece"
                              aria-hidden="true"
                              style={{
                                 color: 'rgb(168, 0, 0)',
                              }}
                           ></i>
                        }
                        cardSubTitle="Problem Solving"
                        cardBar={
                           <ProgressBar
                              now={80}
                              style={{
                                 backgroundColor: 'rgb(168, 0, 0)',
                              }}
                           />
                        }
                     />

                     <SkillsCards
                        cardTitle={
                           <i
                              class="fa-light fa-sass"
                              style={{
                                 color: 'red',
                              }}
                           ></i>
                        }
                        cardSubTitle="SASS"
                        cardBar={<ProgressBar now={80} />}
                     />
                     <SkillsCards
                        cardTitle={
                           <i
                              className="fa fa-palette"
                              style={{
                                 color: 'rgb(255, 143, 143)',
                              }}
                           ></i>
                        }
                        cardSubTitle="Design"
                        cardBar={
                           <ProgressBar
                              now={80}
                              style={{
                                 backgroundColor: 'rgb(255, 143, 143)',
                              }}
                           />
                        }
                     />
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   );
};
