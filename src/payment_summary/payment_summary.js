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
          name: 'Cattle Farm New Zealand',
          price: 2000,
          quantity: 1,
        },
        {
          name: 'Corn Field Vietnam',
          price: 500,
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
      <div className={'card'}>
        <div className={'pic'}>
          <img
            src="https://www.radionz.co.nz/assets/news/55507/eight_col_Cows_in_paddock_generic_16x10.jpg?1450035263.jpg"
            style={{width: '100%', height: '100%'}}
            alt="Logo"
          />
        </div>
        <div>
          <div style={{flexBasis: '80%', padding: '0px 10px', color: 'grey'}}>
            {items.name}
          </div>
          <div style={{padding: '10px'}} className={'quantity'}>
            <div>{items.quantity}</div>
          </div>
        </div>
        <div>{items.price}</div>
      </div>
    );
  }

  accountDetails() {
    const {total} = this.state;
    return (
      <div className={'rectangleBody'}>
        <div className={'details'}>
          <div className={'account'}>Account Details</div>
          <div
            style={{
              display: 'flex',
              flexBasis: '100%',
              flexWrap: 'wrap',
              padding: '10px',
            }}>
            <div
              style={{
                flexGrow: 1,
                fontWeight: 'bold',
                color: 'black',
                alignSelf: 'center',
              }}>
              Bank Account:
            </div>
            <div style={{textAlign: 'center'}}>
              <div>SEB 7987654777</div>
              <div>Recipient HarvestMoon Inc</div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexBasis: '100%',
              flexWrap: 'wrap',
              padding: '10px',
            }}>
            <div style={{flexGrow: 1, fontWeight: 'bold', color: 'black'}}>
              Deadline:
            </div>
            <div>01 April 2019, 18.00</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexBasis: '100%',
              flexWrap: 'wrap',
              padding: '10px',
            }}>
            <div style={{flexGrow: 1, fontWeight: 'bold', color: 'black'}}>
              Amount to transfer:
            </div>
            <div style={{color: 'orange'}}>{`$ ${total}`}</div>
          </div>
          <Link
            className="btn_details"
            style={{textDecoration: 'none', color: '#ffffff'}}
            to={ROUTES.ORDER_HISTORY}>
            Confirm Payment
          </Link>
        </div>
      </div>
    );
  }

  render() {
    const {card} = this.state;
    return (
      <div className="main-div">
        <div className={'left-content'}>
          {card &&
            card.map((items, index) => {
              return this.myCard(items, index);
            })}
        </div>
        <div className={'right-content'}>{this.accountDetails()}</div>
      </div>
    );
  }
}

export default Summary;
