import React from 'react';
import { Switch, Route ,BrowserRouter as Router, Link } from 'react-router-dom'; 

import Intro from './Intro' 
import Video from './Video' 
import Contact from './Contact' 

import Unsubscribe from '../Pages/Unsubscribe';
import Privacy from '../Pages/Privacy';


const Main = () => {
  return (   
            <Switch>  
                <Route path='/unsubscribe' component={Unsubscribe} ></Route>
                <Route path='/privacy' component={Privacy} ></Route>
                <Route path='/' >
                    {/* <Video /> */}
                    <Intro />
                    <Contact />
                </Route>
            </Switch> 
  );
}

export default Main;