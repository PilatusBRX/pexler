import React, {Suspense, lazy} from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const Routes = () => {
  return (  
    <Suspense fallback={'Loading...'}>
        <Switch>
          <Route component={Home} exact path="/"/>         
          <Route component={About} path="/sobre" />              
          <Route component={NotFound} exact path="/*" />
        </Switch>  
    </Suspense>    
   )
}

