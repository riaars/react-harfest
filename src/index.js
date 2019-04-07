import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomePage from './homepage/homepage';
import Register from './register/register';
import Login from './login/login';
import History from './history/history';
import Detail from './project_detail/project_detail';
import Profile from './profile/profile';
import Forgot from './forgotpassword/forgotpassword';
import Transactionlistf from './transactionlistf/transactionlistf';
import * as ROUTES from './constants/routes';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar'
const TestComponent = props => {
  return (
    <React.Fragment>
     
      <Link to={ROUTES.REGISTER}>Register page</Link>
      <br />
      <Link to={ROUTES.LOGIN}>Login page</Link>
      <br />
      <Link to={ROUTES.PROFILE}>Account page</Link>
      <br />
      <Link to={ROUTES.FORGOT_PASSWORD}>Forgot Password page</Link>
      <br />
      <Link to={ROUTES.HOMEPAGE}>Home page</Link>
      <br />
      <Link to={ROUTES.PROJECT_DETAIL}>Project Detail page</Link>
      <br />
      <Link to={ROUTES.ORDER_HISTORY}>Order History page</Link>
      <br />
      <Link to={ROUTES.TRANSACTION_LIST_FARMER}>Transaction List page (farmer)</Link>
      <br />
    </React.Fragment>
  );
};

const AppBase = () => (
  <React.Fragment>
    <Switch>
      <Route
        exact
        path={ROUTES.LANDING}
        render={() => (
            <TestComponent />
        )}
      />
      <Route exact path={ROUTES.REGISTER} render={() => <Register />} />
      <Route exact path={ROUTES.LOGIN} render={() => <Login />} />
      <Route exact path={ROUTES.PROFILE} render={() => <Profile />} />
      <Route exact path={ROUTES.FORGOT_PASSWORD} render={() => <Forgot />} />
      <Route exact path={ROUTES.HOMEPAGE} render={() => <HomePage />} />
      <Route exact path={ROUTES.PROJECT_DETAIL} render={() => <Detail />} />
      <Route exact path={ROUTES.ORDER_HISTORY} render={() => <History />} />
      <Route exact path={ROUTES.TRANSACTION_LIST_FARMER} render={() => <Transactionlistf />} />
    </Switch>
  </React.Fragment>
);

ReactDOM.render(
  <BrowserRouter>
    <Navbar/>
    <AppBase />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
