import React from 'react';
import './history.css';
import PropTypes from 'prop-types';
import * as ROUTES from '../constants/routes';
import {Link} from 'react-router-dom';
import {faHistory} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const History = props => {
  return (
    <React.Fragment>
      <div className="history-container" />
      <br />
      <div className="history-container">
        <img
          className="order-image"
          src="https://2.bp.blogspot.com/-0hwnwEwRwEE/WRo0WkSIwCI/AAAAAAAALlY/hNV5CmUoitgwc77ekL4EI7oK27dtuzZvACLcB/s1600/grape%2Bfarming%2BKenya.jpg"
          alt="orderimg1"
        />
        <p className="order-title">{props.name1}</p>

        <div className="waiting-status">
          <FontAwesomeIcon icon={faHistory} style={{marginRight: '20px'}} />
          Waiting for Payment
        </div>

        <img
          className="date-image"
          src="https://png.pngtree.com/svg/20170725/99541b879c.png"
          alt="date"
        />
        <span className="order-date">{props.location1}</span>
        <br />
        <img
          className="date-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLp9GlK9bnzA7fZdvjCkPGZ3WjcnQMIeg88AEU734QzYPZCTM"
          alt="location"
        />
        <span className="order-date">{props.date1}</span>
        <br />
        <span className="price-event">{props.price1}</span>
        <br />
        <br />
        <Link
          className="btn_details"
          style={{textDecoration: 'none', color: '#ffffff'}}
          to={ROUTES.PROJECT_DETAIL}>
          Make a Payment
        </Link>
        <br />
        <br />
        <hr className="line-break" />
        <br />
      </div>
      <div className="history-container ">
        <img
          className="order-image"
          src="http://upload.evocdn.co.uk/fruitnet/uploads/asset_image/2_1202240_e.jpg"
          alt="orderimg2"
        />
        <p className="order-title">{props.name2}</p>
        <div className="completed-status">
          <FontAwesomeIcon icon={faHistory} style={{marginRight: '20px'}} />
          Completed
        </div>
        <img
          className="date-image"
          src="https://png.pngtree.com/svg/20170725/99541b879c.png"
          alt="date"
        />
        <span className="order-date">{props.location2}</span>
        <br />
        <img
          className="date-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLp9GlK9bnzA7fZdvjCkPGZ3WjcnQMIeg88AEU734QzYPZCTM"
          alt="location"
        />
        <span className="order-date">{props.date2}</span>
        <br />
        <span className="price-event">{props.price2}</span>
        <br />
        <br />
        <Link
          className="btn_details"
          style={{textDecoration: 'none', color: '#ffffff'}}
          to={ROUTES.PROJECT_DETAIL}>
          View Details
        </Link>
        <br />
        <br />
        <hr className="line-break" />
        <br />
      </div>
    </React.Fragment>
  );
};

History.propTypes = {
  name1: PropTypes.string,
  date1: PropTypes.string,
  location1: PropTypes.string,
  img1: PropTypes.string,
  name2: PropTypes.string,
  date2: PropTypes.string,
  location2: PropTypes.string,
};

History.defaultProps = {
  name1: 'Grape Picking in Lisboa',
  date1: 'April 8-10 2019',
  price1: '$300',
  location1: 'Lisbon',

  name2: 'Banana Picking in Thailand',
  date2: 'May 9-12 2019',
  price2: '$500',
  location2: 'Thailand',
};

export default History;
