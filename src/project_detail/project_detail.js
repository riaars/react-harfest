import React, {Component} from 'react';
import './project_detail.css';
import * as ROUTES from '../constants/routes';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faMapMarkerAlt,
  faHistory,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';

class Detail extends Component {
  state = {
    title: ['Strawberries picking in Queensland'],
    date: ['12-20 April 2019'],
    location: ['St. Marry John Park'],
    img_url: [
      'https://www.onedaykorea.com/wp-content/uploads/2015/04/one-day-korea-korean-strawberry-picking-tour.jpg',
    ],
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non tempor tortor. Cras sagittis lectus eros, quis congue eros volutpat id. Sed rhoncus est ut congue mollis. Pellentesque dui sapien, sodales vel sapien non, euismod luctus dui. Quisque convallis odio id sapien faucibus, vel auctor leo rutrum. Cras porta tortor ac metus ultricies pretium. Nam convallis justo elit. Etiam sit amet porta mauris. Proin luctus at metus gravida interdum. Ut orci velit, sodales id arcu at, dignissim malesuada erat. Nunc viverra euismod ante, vel efficitur metus facilisis non. Nullam ipsum diam, vehicula sit amet ultricies malesuada, posuere nec lectus. Curabitur tempor arcu nec ligula gravida maximus. Vestibulum viverra lorem ac massa ornare, quis vulputate orci sodales.',
    ],
    price: ['$150'],
    quota: ['2 people'],
    packs: [100],
    hours: [6],
    insurance: ['No'],
    discount: [5],
    published_date: ['12 April 2019'],
  };

  showProject = () =>
    this.state.title.map((project, i) => (
      <div className="item">
        <div className="row">
          <div className="img-project-detail">
            <img src={this.state.img_url[i]} />
          </div>
          <div>
            <div className="project-time-venue">
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
            </div>
            <div className="project-criteria">
              <div>
                <div className="sp btn btn-outline-success disabled">
                  {this.state.price[i]}
                </div>
                <div className="sp btn btn-outline-success disabled">
                  {this.state.quota[i]}
                </div>
                <div className="sp btn btn-outline-success disabled">
                  {this.state.packs[i]} per day
                </div>
              </div>
              <div>
                <div className="sp btn btn-outline-success disabled">
                  {this.state.hours[i]} hours
                </div>

                <div className="sp btn btn-secondary disabled">
                  {this.state.insurance[i]} Insurance
                </div>
                <div className="sp btn btn-outline-success disabled">
                  {this.state.discount[i]}% OFF
                </div>
              </div>
            </div>
          </div>

          <div />
        </div>

        <div className="project-description">
          <h5>Description</h5>
          {this.state.description[i]}
        </div>

        <div className="line" />
        <div className="published-since">
          Published since {this.state.published_date[i]}
        </div>
      </div>
    ));

  render() {
    return (
      <div className="detail-container">
        <div className="page-title">{this.state.title}</div>
        <div className="list-item"> {this.showProject()}</div>
        <Link to={ROUTES.CART}>
          <div className="add-project btn btn-success">Book Event</div>
        </Link>
      </div>
    );
  }
}

export default Detail;
