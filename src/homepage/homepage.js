import React, {Component} from 'react';
import {
  faMedal,
  faHistory,
  faSearch,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './homepage.css';
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import {noAuto} from '@fortawesome/fontawesome-svg-core';

class HomePage extends Component {
  state = {
    title: [
      'Strawberries picking in Queensland',
      'Blueberries Picking in Austria',
      'Apple Picking in Austria',
    ],
    date: ['12-20 April 2019', '30 April-5 May 2019', '5 May 2019-10 May 2019'],
    location: ['St. Marry John Park', 'Green Village', 'Vartoftagatan Park'],
    img_url: [
      'https://www.onedaykorea.com/wp-content/uploads/2015/04/one-day-korea-korean-strawberry-picking-tour.jpg',
      'https://cdn.jewishboston.com/uploads/2016/06/pick-blueberries-729x486.jpg',
      'https://www.atlantaparent.com/wp-content/uploads/2012/01/iStock-489760350-1024x682.jpg',
    ],
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    ],
    price: ['$150', '$200', '$250'],
    quota: ['2 people', '3 people', '4 people'],
    packs: [100, 150, 100],
    hours: [6, 4, 6],
    insurance: ['No', 'No', 'No'],
    discount: [5, 10, 5],
    published_date: ['12 April 2019', '29 April 2019', '30 April 2019'],
  };

  showEvent = () =>
    this.state.title.map((project, i) => (
      <div className="card-deck" id="project-group">
        <Link
          style={{
            textDecoration: 'none',
          }}
          to={ROUTES.PROJECT_DETAIL}>
          <div className="card" id="foru-card">
            <h5 className="card-title" id="projectcard-title">
              {this.state.title[i]}
            </h5>
            <img
              className="card-img-top"
              src={this.state.img_url[i]}
              alt="cap4"
            />
            <div className="card-body" />
            <div className="row">
              <div className="card-left">
                <div className="price-event">{this.state.price[i]}</div>
                <div className="qty-event">for {this.state.quota[i]}</div>
              </div>
              <div className="card-right">
                <button className="btn-view-detail">Details</button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    ));

  render() {
    return (
      <div>
        <div class="container" id="homepage-container">
          <h3> Good Morning, Ria!</h3>
          <h3> Where do you want to go?</h3>

          <div class="row" />
          <div class="row" id="head-row">
            {/* <video
              controls
              style={{
                maxWidth: noAuto,
                height: '100%',
              }}>
              <source src={require('../asset/test.MP4')} type="video/mp4" />
            </video> */}

            <img
              id="head-image1"
              src="http://www.goharvestmarket.com/application/files/3814/7394/9452/Farmer_Carrying_Veggies_1024-576.jpg"
              alt="cap1"
            />
            <img
              id="head-image2"
              src="https://www.radionz.co.nz/assets/news_crops/57905/eight_col_kiwifruit-pickers_v_pkg.00_03_02_15.Still007.jpg?1527049259"
              alt="cap2"
            />
            <img
              id="head-image3"
              src="https://console.kr-asia.com/wp-content/uploads/2018/03/farmland.jpg"
              alt="cap3"
            />
            <br />
            <div id="search-input">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-secondary" type="button">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Input Destination"
                  aria-label=""
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          <div class="row" id="title-text">
            Categories
          </div>
          <div class="row">
            <div class="card" id="categories-card">
              <FontAwesomeIcon id="categories-icon" icon={faHistory} />
              <div class="card-body">
                <p class="card-text" id="categories-text">
                  Recently Added
                </p>
              </div>
            </div>
            <div class="card" id="categories-card">
              <FontAwesomeIcon id="categories-icon" icon={faMedal} />
              <div class="card-body">
                <p class="card-text" id="categories-text">
                  Best Price
                </p>
              </div>
            </div>
            <div class="card" id="categories-card">
              <FontAwesomeIcon id="categories-icon" icon={faMapMarkerAlt} />
              <div class="card-body">
                <p class="card-text" id="categories-text">
                  Near Me
                </p>
              </div>
            </div>
          </div>
          <div class="row" id="title-text">
            For You
          </div>
          <div className="row" id="project-group">
            {this.showEvent()}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
