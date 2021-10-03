import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import './skills.style.css';

export const SkillsCards = ({ cardTitle, cardSubTitle, cardText, cardBar }) => {
   return (
      <div className="skillscards">
         <Card className="my-3 skillscards">
            <Card.Body>
               <Card.Title className="cardTitle">{cardTitle}</Card.Title>
               <Card.Subtitle className="mb-2 text-muted cardSubTitle">
                  {cardSubTitle}
               </Card.Subtitle>
               <ProgressBar className="bar">{cardBar}</ProgressBar>
            </Card.Body>
         </Card>
      </div>
   );
};
