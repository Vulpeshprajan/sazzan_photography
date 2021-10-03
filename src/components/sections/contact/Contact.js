import React, { useState } from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import { Title } from '../../section-title/Title';

import './contact.style.css';

const initialForm = {
   fname: '',
   email: '',
   message: '',
};
export const Contact = ({ sendMessage }) => {
   const [formData, setFormData] = useState(initialForm);

   const handleOnChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
      console.log(name, value);
   };
   console.log(formData);

   // const handleOnSubmit = (e) => {
   //    e.preventDefault();
   // //    // sendMessage(formData);
   // };

   const handleOnSend = (e) => {
      e.preventDefault();
      sendMessage(formData);
   };

   return (
      <div id="Contact" className="contact">
         <Container>
            <Row className="py-5">
               <Col>
                  <Title title="Contact Me" />
               </Col>
            </Row>
            <div className="textheader">
               Have some idea to create? Let's communicate!
            </div>
            <div className="ContactLists my-3">
               <a href="tel:+9779828826670">
                  <i className="fas fa-phone-square"></i>
                  <span className="handlers">Call</span>
               </a>
               <a href="mailto:sazzanshuttespeed@gmail.com">
                  <i className="fas fa-envelope-square"></i>
                  <span className="handlers">Email</span>
               </a>
            </div>
            <div className="pb-3">
               <Form id="contact-form" onSubmit={handleOnSend}>
                  <Form.Group
                     className="mb-3"
                     controlId="exampleForm.ControlInput1"
                  >
                     <Form.Label className="form-title">Full Name</Form.Label>
                     <Form.Control
                        type="name"
                        onChange={handleOnChange}
                        name="fname"
                        placeholder="Sam Smith"
                     />
                  </Form.Group>
                  <Form.Group
                     className="mb-3"
                     controlId="exampleForm.ControlInput1"
                  >
                     <Form.Label className="form-title">
                        Email address
                     </Form.Label>
                     <Form.Control
                        type="email"
                        onChange={handleOnChange}
                        name="email"
                        placeholder="name@example.com"
                     />
                  </Form.Group>
                  <Form.Group
                     className="mb-3"
                     controlId="exampleForm.ControlTextarea1"
                  >
                     <Form.Label className="form-title">
                        Your Message
                     </Form.Label>
                     <Form.Control
                        as="textarea"
                        name="message"
                        onChange={handleOnChange}
                        rows={3}
                     />
                  </Form.Group>
                  <Button type="submit">Send</Button>
               </Form>
            </div>
         </Container>
      </div>
   );
};
