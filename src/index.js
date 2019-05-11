import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import HomePage from './homepage/homepage';
import Register from './register/register';
import Login from './login/login';
import History from './history/history';
import Detail from './project_detail/project_detail';
import Profile from './profile/profile';
import Forgot from './forgotpassword/forgotpassword';
import Cart from './cart/cart';
import Summary from './payment_summary/payment_summary';
import AddProject from './addproject/addproject';
import FARMHOMEPAGE from './farm_homepage/farm_homepage';
import Transactionlistf from './transaction_list/transaction_list';
import LandingPage from './landing/landing';
import * as ROUTES from './constants/routes';
import $ from 'jquery';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
const TestComponent = props => {
  return (
    <React.Fragment>
      <Link to={ROUTES.LANDING}>Landing Page</Link>
      <br />
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
      <Link to={ROUTES.CART}>Cart</Link>
      <br />
      <Link to={ROUTES.SUMMARY}>Payment Summary</Link>
      <br />
      <Link to={ROUTES.ADDPROJECT}>AddProject</Link>
      <br />
      <Link to={ROUTES.FARMHOMEPAGE}>Farm Homepage</Link>
      <br />
      <Link to={ROUTES.TRANSACTION_LIST_FARMER}>
        Transaction List page (farmer)
      </Link>
      <br />
    </React.Fragment>
  );
};

const AppBase = () => (
  <div className="container-body">
    <Switch>
      <Route
        exact
        path={ROUTES.TESTCOMPONENT}
        render={() => <TestComponent />}
      />
      <Route exact path={ROUTES.LANDING} render={() => <LandingPage />} />
      <Route exact path={ROUTES.REGISTER} render={() => <Register />} />
      <Route exact path={ROUTES.LOGIN} render={() => <Login />} />
      <Route exact path={ROUTES.PROFILE} render={() => <Profile />} />
      <Route exact path={ROUTES.FORGOT_PASSWORD} render={() => <Forgot />} />
      <Route exact path={ROUTES.HOMEPAGE} render={() => <HomePage />} />
      <Route exact path={ROUTES.PROJECT_DETAIL} render={() => <Detail />} />
      <Route exact path={ROUTES.ORDER_HISTORY} render={() => <History />} />
      <Route exact path={ROUTES.CART} render={() => <Cart />} />
      <Route exact path={ROUTES.SUMMARY} render={() => <Summary />} />
      <Route exact path={ROUTES.ADDPROJECT} render={() => <AddProject />} />
      <Route exact path={ROUTES.FARMHOMEPAGE} render={() => <FARMHOMEPAGE />} />
      <Route
        exact
        path={ROUTES.TRANSACTION_LIST_FARMER}
        render={() => <Transactionlistf />}
      />
    </Switch>
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <AppBase />
  </BrowserRouter>,
  document.getElementById('root')
);
