import React from 'react';
import './landing.css';
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const LandingPage = props => (
  <div className="landingpage-container">
    <div className="home-page-banner">
      <div className="home-banner-txt-container">
        <div className="inner">
          <h1>Why should you join Harvest Haven</h1>

          <div className="inner-content">
            Harvest Haven is one of the world's farming tourism platforms. It
            connects you with farmer to gain an adventure experience and taste
            the local. If you want to have different travelling experience,
            Harvest Haven is for you.
          </div>

          <div className="banner-buttons">
            <Link to={ROUTES.REGISTER} className="btn btn-success btn-homepage">
              <span>Join Now</span>
            </Link>
            <Link to={ROUTES.HOMEPAGE} className="btn btn-warning btn-homepage">
              <span>Explore</span>
            </Link>
          </div>
        </div>
      </div>
      <img
        className="home-img-banner"
        src={require('../images/image_2.png')}
        alt="Book stack homepage banner"
      />
    </div>

    <div className="homepage-cards">
      <div className="card inner-card">
        <h3>Secure</h3>
        <div className="line" />
        <span>
          We ensure that every transaction is secure with a compliance
          procedure.
        </span>
      </div>
      <div className=" card inner-card">
        <h3>Easy</h3>
        <div className="line" />
        <span>
          Find your dream traveling experience, make an order, arrange the
          accommodation, and pay
        </span>
      </div>
      <div className=" card inner-card">
        <h3>Efficient</h3>
        <div className="line" />
        <span>
          Track your booking without hassle. You will be notified for every
          booking update.
        </span>
      </div>
      <div className="card inner-card">
        <h3>Search</h3>
        <div className="line" />
        <span>
          We provide lots of farming and fishing tourism from around the world.
        </span>
      </div>
    </div>

    <h2>How does HarvestHaven work? </h2>
    <div className="how-it-works-container">
      <img
        className="mockup-platform"
        src={require('../images/image_3.png')}
        alt="Book stack homepage banner"
      />

      <div className="how-it-works">
        <div>
          <div className="header-title">Find Interesting Experience</div>
          Search the farming experience that you want to have. HarvestHaven
          provides a fully comprehensive tourism experience from around the
          world.
        </div>
        <div>
          <div className="header-title">Pay the Event</div>
          Pay the event that you want to have. We also offer you with best deals
          accommodation.
        </div>
        <div>
          <div className="header-title">Track the Plant Progress</div>
          After you paid, you will get the update of the plant that you want to
          work with during traveling
        </div>
        <div>
          <div className="header-title">Feel the Experience</div>
          Come to the place. Feel the experience of farming and other
          interesting local events.
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
