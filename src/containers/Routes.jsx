/*** 
UC Berkeley Pi Sigma Epsilon -- Zeta Chi Chapter
author: @rahrang
***/

import React from 'react';

// node modules
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// page components
import Home from './Home/Home';
import About from './About/About';
import Careers from './About/Careers/Careers';
import Recruitment from './Recruitment/Recruitment';
// import WhyPSE from './Recruitment/WhyPSE';
import FAQs from './Recruitment/FAQs/FAQs';
//import CoffeeChats from './Recruitment/CoffeeChats';
import ApplicationHandler from './Recruitment/Application/ApplicationHandler';
import Brotherhood from './Brothers/Brotherhood';
import Brother from './Brothers/Brother';
import Executives from './Brothers/Executives';
import Contact from './Contact/Contact';
import Error404 from './Error404';

// other components
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import AppBanner from './components/AppBanner';

// page paths
import {
  HOME_PATH,
  ABOUT_PATH,
  CAREERS_PATH,
  RECRUITMENT_PATH,
  // WHYPSE_PATH,
  FAQS_PATH,
  //COFFEE_CHAT_PATH,
  APPLICATION_PATH,
  BROTHERS_PATH,
  EXECUTIVES_PATH,
  CONTACT_PATH
} from './Navbar/navbar_constants';

//insert [<Route path={WHYPSE_PATH} component={WhyPSE} />] and [<Route path={COFFEE_CHAT_PATH} component={CoffeeChats} />] 
//in gap to reinstate WhyPSE and Coffee Chat page

const Routes = () => (
  <div id="router-container">
    <Navbar />
    <AppBanner />
    <MainContainer>
      <Switch>
        <Route exact path={HOME_PATH} component={Home} />
        <Route path={ABOUT_PATH} component={About} />
        <Route path={CAREERS_PATH} component={Careers} />
        <Route path={RECRUITMENT_PATH} component={Recruitment} />
        <Route path={FAQS_PATH} component={FAQs} />
        <Route path={APPLICATION_PATH} component={ApplicationHandler} />
        <Route exact path={BROTHERS_PATH} component={Brotherhood} />
        <Route path={`${BROTHERS_PATH}/:name`} component={Brother} />
        <Route exact path={EXECUTIVES_PATH} component={Executives} />
        <Route path={`${EXECUTIVES_PATH}/:name`} component={Brother} />
        <Route path={CONTACT_PATH} component={Contact} />
        <Route component={Error404} />
      </Switch>
    </MainContainer>
    <Footer />
  </div>
);

export default Routes;

const MainContainer = styled.div`
  min-height: calc(100vh - 118px);
`;
