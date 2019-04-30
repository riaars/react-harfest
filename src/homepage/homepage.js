import React from 'react';
import {
  faMedal,
  faHistory,
  faSearch,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './homepage.css';
const HomePage = props => {
  return (
    <React.Fragment>
      <div class="container" id="homepage-container">
        <div class="row" />
        <div class="row" id="head-row">
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
                placeholder=""
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
                High Return
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
        <div class="row">
          <div class="card-deck" id="project-group">
            <div class="card" id="foru-card">
              <img
                class="card-img-top"
                src="https://www.radionz.co.nz/assets/news/55507/eight_col_Cows_in_paddock_generic_16x10.jpg?1450035263.jpg"
                alt="cap4"
              />
              <div class="card-body">
                <h5 class="card-title" id="projectcard-title">
                  Card title
                </h5>
                <p class="card-text" id="projectcard-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>

            <div class="card" id="foru-card">
              <img
                class="card-img-top"
                src="https://www.radionz.co.nz/assets/news/55507/eight_col_Cows_in_paddock_generic_16x10.jpg?1450035263.jpg"
                alt="cap5"
              />
              <div class="card-body">
                <h5 class="card-title" id="projectcard-title">
                  Card title
                </h5>
                <p class="card-text" id="projectcard-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>

            <div class="card" id="foru-card">
              <img
                class="card-img-top"
                src="https://www.radionz.co.nz/assets/news/55507/eight_col_Cows_in_paddock_generic_16x10.jpg?1450035263.jpg"
                alt="cap6"
              />
              <div class="card-body">
                <h5 class="card-title" id="projectcard-title">
                  Card title
                </h5>
                <p class="card-text" id="projectcard-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <button class="btn-see-more">See More</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
