/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';
import './payment_summary.css';
import * as ROUTES from '../constants/routes';
import {Link} from 'react-router-dom';
class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [
        {
          name: 'Strawberries Picking in Queensland',
          price: 150,
          quantity: 1,
        },
      ],
      total: 0,
    };
  }

  quantityTotal() {
    const {card} = this.state;
    var myPrice = 0;
    card.map(items => {
      myPrice += items.price * items.quantity;
    });

    this.setState({
      total: myPrice,
    });
  }

  componentWillMount() {
    this.quantityTotal();
  }

  subtract(items, index) {
    const {card} = this.state;
    if (items.quantity > 1) {
      card[index].quantity = card[index].quantity - 1;

      this.setState({card}, () => {
        this.quantityTotal();
      });
    }
  }

  add(items, index) {
    const {card} = this.state;
    if (items.quantity >= 1) {
      card[index].quantity = card[index].quantity + 1;

      this.setState({card}, () => {
        this.quantityTotal();
      });
    }
  }

  myCard(items, index) {
    return (
      <div className="card">
        {items.name}
        <div className="card-wrapper">
          <div className="cart-left">
            <div className="pics">
              <img
                src="https://www.onedaykorea.com/wp-content/uploads/2015/04/one-day-korea-korean-strawberry-picking-tour.jpg"
                style={{width: '100%', height: '100%'}}
                alt="Logo"
              />
            </div>
          </div>
          <div className="cart-right">
            <input
              type="date"
              name="dateofevent"
              id="dateofevent"
              value="2019-05-14"
            />
            <div style={{padding: '10px'}} className={'quantity'}>
              {items.quantity}
            </div>
            <div className="price-event">${items.price * items.quantity}</div>
          </div>
        </div>
      </div>
    );
  }

  accountDetails() {
    const {total} = this.state;
    return (
      <div>
        <div className="payment-header"> Payment</div>
        <form className="payment-container">
          <div className="form-group">
            <label for="numberofcc"> Credit Card Number</label>
            <input
              type="number"
              className="form-control"
              name="dateofevent"
              id="numberofcc"
              placeholder="4111 1111 1111"
            />
          </div>
          <div className="form-group">
            <label> Expiry Date</label>
            <input type="date" className="form-control" />
          </div>
          <div className="form-group">
            <label>cvv</label>
            <input
              type="number"
              className="form-control"
              name="dateofevent"
              id="dateofevent"
            />
          </div>
        </form>
        <Link
          className="btn_details"
          style={{textDecoration: 'none', color: '#ffffff'}}
          to={ROUTES.ORDER_HISTORY}>
          Proceed
        </Link>
      </div>
    );
  }

  render() {
    const {card} = this.state;
    return (
      <div className="cart-container">
        {card &&
          card.map((items, index) => {
            return this.myCard(items, index);
          })}
        <div className="detail-payments">{this.accountDetails()}</div>
      </div>
    );
  }
}

export default Summary;
