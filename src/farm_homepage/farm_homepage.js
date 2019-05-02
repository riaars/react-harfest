import React, {Component} from 'react';
import './farm_homepage.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendar, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

class farm_homepage extends Component {
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

  showProject = () =>
    this.state.title.map((project, i) => (
      <div className="item">
        <div className="card">
          <div className="project-title page-header">{this.state.title[i]}</div>
          <div className="img-project-preview">
            <img src={this.state.img_url[i]} />
          </div>
          <div />
          <div className="project-date">
            <div className="padding-left">
              <FontAwesomeIcon
                style={{marginRight: '10px'}}
                icon={faCalendar}
              />
              {this.state.date[i]}
            </div>
          </div>
          <div className="project-location">
            <div className="padding-left">
              <FontAwesomeIcon
                style={{marginRight: '10px'}}
                icon={faMapMarkerAlt}
              />
              {this.state.location[i]}
            </div>
          </div>
          <div className="project-description">{this.state.description[i]}</div>
          <div className="project-criteria">
            <div>
              <div className="space btn btn-outline-secondary disabled">
                {this.state.price[i]}
              </div>
              <div className="space btn btn-outline-secondary disabled">
                {this.state.quota[i]}
              </div>
            </div>
            <div>
              <div className="space btn btn-outline-secondary disabled">
                {this.state.packs[i]} per day
              </div>
              <div className="space btn btn-outline-secondary disabled">
                {this.state.hours[i]} hours
              </div>
            </div>
            <div>
              <div className="space btn btn-secondary disabled">
                {this.state.insurance[i]} Insurance
              </div>
              <div className="space btn btn-outline-secondary disabled">
                {this.state.discount[i]}% OFF
              </div>
            </div>
          </div>
          <div className="line" />
          <div className="published-since">
            Published since {this.state.published_date[i]}
          </div>
          <div className="project-actions">
            <div className="edit-project btn btn-success">See Transaction</div>
            <div className="edit-project btn btn-success">Edit</div>
          </div>
        </div>
      </div>
    ));

  render() {
    return (
      <div className="farm-homepage-container">
        <div className="page-title">My FarmLand</div>
        <div className="list-item"> {this.showProject()}</div>
        <div className="add-project btn btn-dark">Add New Project</div>
      </div>
    );
  }
}

export default farm_homepage;
