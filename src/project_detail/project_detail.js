import React from 'react';
import './project_detail.css';
import * as ROUTES from '../constants/routes';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendar, faMapMarkerAlt, faHistory, faDollarSign} from '@fortawesome/free-solid-svg-icons';

const Detail = props => {
  return (
    <React.Fragment>
    <div class="detail-container">
      <img
        className="imagez"
        alt="image1"
        src="https://www.radionz.co.nz/assets/news/55507/eight_col_Cows_in_paddock_generic_16x10.jpg?1450035263.jpg"
      />
      <div class="title" >Cattle Farm New Zealand</div>
      <br>
      </br>
        <ul class="list-group" style={{marginRight: '71px', marginLeft: '71px'}}>
          <li class="list-group-item"> <FontAwesomeIcon
              style={{marginRight: '20px'}}
              icon={faMapMarkerAlt}
          />Location      &emsp; &emsp;       Wellington</li>
          <li class="list-group-item"> <FontAwesomeIcon
              style={{marginRight: '17px'}}
              icon={faHistory}
          />Duration &emsp; &emsp;   3 Weeks</li>
          <li class="list-group-item"> <FontAwesomeIcon
              style={{marginRight: '20px'}}
              icon={faDollarSign}
          /> Price &emsp; &emsp;  &emsp;  2000 kr</li>          
        </ul>
        <br></br>
      <div class="description">
         
        <p>
          New Zealand is the world’s 8th largest milk producer, with more than 4
          million dairy cows producing over 15 billion litres of milk annually.
          The main areas for dairy farming in New Zealand are the Waikato,
          Taranaki, Southland, Northland, Horowhenua, Manawatu and Westland
          regions. The main breeds of dairy cows in New Zealand are
          Holstein-Friesian, Jersey and Ayrshire as well as the more recently
          bred KiwiCross. Livestock is mainly grass-fed. The first
          milk-processing factories opened in the 1880s and the first milking
          machines were introduced in 1893. By 1920 there were 600 factories
          around New Zealand. Today our largest dairy company is Fonterra, a
          co-operative owned by 11,000 farmers, which supplies around 95% of New
          Zealand’s milk.Today New Zealand produces more than 100 types of dairy
          products, including whole milk, cream, butter, cheese, milk powder and
          buttermilk.{' '}
        </p>
        <div align="right">
          <Link
            className="btn_request"
            style={{textDecoration: 'none', color: '#ffffff'}}
            to={ROUTES.CART}>
            Book Now
          </Link>
          {/* <button className = 'btn_request' >Book Now </button> */}
        </div>
      </div>
      
    </div>
      
    </React.Fragment>
  );
};

export default Detail;
