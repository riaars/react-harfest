import React, {Component} from 'react';
import './transaction_list.css';
class transactionlistf extends Component {
  state = {
    user: ['Shelly', 'Mona', 'Ria'],
    date: ['13 April 2019', '20 April 2019', '7 May 2019'],
    price: ['$150', '$200', '$250'],
    status: ['completed', 'completed', 'completed'],
  };

  showCustomer = () =>
    this.state.user.map((project, i) => (
      <div className="card wrapper-list">
        <div className="order-component">
          <div className="project-title-left">
            Strawberries picking in Queensland
            <div className="book-date">{this.state.date[i]}</div>
          </div>
          <span>
            <div className="project-preview-thumbnail">
              <img src="https://www.onedaykorea.com/wp-content/uploads/2015/04/one-day-korea-korean-strawberry-picking-tour.jpg" />
            </div>
            <div />
            <div className="info">
              <div className="customer">{this.state.user[i]}</div>
              <div className="price">{this.state.price[i]}</div>
              <div className="status">{this.state.status[i]}</div>
            </div>
          </span>
        </div>
      </div>
    ));

  render() {
    return <div className="transaction-list">{this.showCustomer()}</div>;
  }
}
export default transactionlistf;
