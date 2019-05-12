import React, {Component} from 'react';
import './cart.css';
import * as ROUTES from '../constants/routes';
import {Link} from 'react-router-dom';

class Cart extends Component {
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
            <input type="date" name="dateofevent" id="dateofevent" />
            <div style={{padding: '10px'}} className={'quantity'}>
              <button
                style={
                  items.quantity === 1
                    ? {
                        backgroundColor: 'lightgrey',
                        color: 'white',
                        border: 'none',
                        width: '25px',
                      }
                    : {
                        width: '25px',
                        backgroundColor: 'white',
                        border: '1px solid lightgrey',
                      }
                }
                onClick={() => this.subtract(items, index)}>
                {'-'}
              </button>
              <div>{items.quantity}</div>
              <button
                style={{
                  width: '25px',
                  backgroundColor: 'white',
                  border: '1px solid lightgrey',
                }}
                onClick={() => this.add(items, index)}>
                {'+'}
              </button>
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
      <div className="card-wrapper">
        <div className="cart-left mleft">
          <div>Total Amount</div>
          <div className="price-event">${total}</div>
        </div>
        <div className="carts-right">
          <Link
            className="btn_details"
            style={{textDecoration: 'none', color: '#ffffff'}}
            to={ROUTES.SUMMARY}>
            Make a Payment
          </Link>
        </div>
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

        <div className="detail-payment">{this.accountDetails()}</div>
      </div>
    );
  }
}

export default Cart;
