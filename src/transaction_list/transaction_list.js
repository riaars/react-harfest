import React, {Component} from 'react';
import './transaction_list.css';
class transactionlistf extends Component {
  state = {
    user: ['Shelly', 'Mona', 'Ria'],
    package: ['5', '7', '9'],
    date: ['13 April 2019', '20 April 2019', '7 May 2019'],
    price: ['$150', '$200', '$250'],
    status: ['Waiting for Payment', 'In Progress', 'Completed'],
  };

  showCustomer = () =>
    this.state.user.map((project, i) => (
      <div className="card wrapper-list">
        <div className="order-component" />
        <div className="info-order">
          <div className="preview">
            <div className="project-title-left">
              <div className="book-date">{this.state.date[i]}</div>
            </div>
            <div className="project-preview-thumbnail">
              <img src="https://www.onedaykorea.com/wp-content/uploads/2015/04/one-day-korea-korean-strawberry-picking-tour.jpg" />
            </div>
            <div className="customer">{this.state.user[i]}</div>
          </div>
          <div className="package">{this.state.package[i]}</div>
          <div className="price">{this.state.price[i]}</div>
          <div className="status-order">{this.state.status[i]}</div>
        </div>
      </div>
    ));

  render() {
    return (
      <div className="transactionlist-container">
        <h2> Transaction List </h2>
        <div className="search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Search transaction here"
          />
        </div>
        <div className="card-list">{this.showCustomer()}</div>
      </div>
    );
  }
}
export default transactionlistf;
