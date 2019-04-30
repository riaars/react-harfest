import React from 'react';
import './project_detail.css';
import * as ROUTES from '../constants/routes';
import {Link} from 'react-router-dom';
const Detail = props => {
  return (
    <React.Fragment>
      <h1> Detail Page</h1>
      <br />
      <br />
      <img
        className="imagez"
        alt="image1"
        src="https://www.radionz.co.nz/assets/news/55507/eight_col_Cows_in_paddock_generic_16x10.jpg?1450035263.jpg"
      />
      <br />
      <br />
      <h6 className="title">Cattle Farm New Zealand</h6>
      <br />
      <br />
      <img
        className="location"
        alt="icon-location"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCMyDxRrLtgdRCRZvbo35vkKtK2MF5P3y_Scn4YgHvF0OxsHD9Q"
      />
      <div class="text">
        <p>
          {' '}
          Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Wellington
        </p>
      </div>
      <br />
      <br />
      <img
        className="duration"
        alt="icon-duration"
        src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/il/time-machine-nav-button.png"
      />
      <div class="text">
        <p>
          Duration
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 Weeks
        </p>
      </div>
      <br />
      <br />
      <img
        className="return"
        alt="icon-return"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXYJ1ErmNco2w2l2BPjfwwI2czhndYREDaA_G1IA4WJPzA1Lq"
      />
      <div class="text">
        <p>Price &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 2000 SEK</p>
      </div>
      <br />
      <br />
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
      </div>
      <div align="right">
        <Link
          className="btn_request"
          style={{textDecoration: 'none', color: '#ffffff'}}
          to={ROUTES.CART}>
          Book Now
        </Link>
        {/* <button className = 'btn_request' >Book Now </button> */}
      </div>
      <br />
      <br />
    </React.Fragment>
  );
};

export default Detail;
