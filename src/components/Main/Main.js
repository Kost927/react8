import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
// import Home from '../../pages/Home';
// import AuthForm from '../authForm/AuthForm';
// import Form from '../Form/Form';
import routes from '../../routes/routes';
import PrivateRoutes from '../../routes/PrivateRoutes';
import PublicRoutes from '../../routes/PublicRoutes';

function Main() {
  return (
    <>
      <Suspense fallback={<h2>loading...</h2>}>
      <Switch>
          {routes.map(route => route.private ? 
          <PrivateRoutes key={route.label} {...route}/>
          : <PublicRoutes key={route.label} {...route}/>
          )}
        {/* <Route exact path="/" component={Home}/>
        <Route path="/contacts" component={Form}/>
        <Route path="/register" component={AuthForm}/>
        <Route path="/login" component={AuthForm}/> */}
      </Switch>
      </Suspense>
    </>
  );
}

export default Main;
