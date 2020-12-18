import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './index';
import Destroy from './Destroy';
import Edit from './Edit';
import Form from './Form';
import New from './New';




const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index}/>
      <Route exact path="/new" component={New}/>
      <Route exact path="/edit/:id" component={Edit}/>
      <Route exact path="/form" component={Form}/>
      <Route exact path="/destroy/:id" component={Destroy}/>
    </Switch>
  );
}
 
export default Routes;