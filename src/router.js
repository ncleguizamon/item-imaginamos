import React from "react";
import {
  Route,
  Switch
} from 'react-router-dom';
//Helpers
import PrivateRoute from './helpers/privateRoute';
// importar componentes
import PageItems from './components/items/page-items';
import PageLogin from './components/login/page-login';



function AppRouter() {
  return (


    <div>
       <Switch>
       <PrivateRoute  exact  path="/" component={PageItems} />
      <Route path="/login" component={PageLogin} />
      <Route component={NoMatch} />

       </Switch>
      
    </div>



  );
}

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        Error pagina no encontrada  <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
export default AppRouter;




