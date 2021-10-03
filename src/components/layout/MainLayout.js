import React from 'react';
import { TopNavbar } from '../header/Navbar';
import { Footer } from '../footer/Footer';
// import {Goup} from "../go-upBtn/Goup"

export const MainLayout = ({ children }) => {
   return (
      <div>
         <TopNavbar />
         {children}
         <Footer />
      </div>
   );
};
