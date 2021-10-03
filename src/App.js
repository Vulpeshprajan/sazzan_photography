import { Hero } from './components/hero/Hero';
import { Skills } from './components/sections/skills/Skills';
import { Projects } from './components/sections/projects/Projects';
import { About } from './components/sections/about/About';
import { Contact } from './components/sections/contact/Contact';

import { MainLayout } from './components/layout/MainLayout';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   const [addMessage, setAddMessage] = useState([]);

   const sendMessage = (FrmData) => {
      console.log('form sent', FrmData);
      setAddMessage([...addMessage, FrmData]);
   };
   console.log(addMessage);

   return (
      <div className="App">
         <Router>
            <Switch>
               <MainLayout>
                  <Route exact path="/Home" children={<Hero />} />
                  <Route exact path="/Projects" children={<Projects />} />
                  <Route exact path="/About" children={<About />} />
                  <Route
                     exact
                     path="/Contact"
                     children={<Contact sendMessage={sendMessage} />}
                  />
                 
                  <Route exact path="/" children={<Hero />} />
               </MainLayout>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
