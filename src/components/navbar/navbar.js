import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import ProfileIcon from '@material-ui/icons/Person';
import CartIcon from '@material-ui/icons/ShoppingBasket';
import * as ROUTES from '../../constants/routes';
import {Link} from 'react-router-dom';
class navbar extends Component {
  state = {
    drawerOpen: false,
    headerShow: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true,
      });
    } else {
      this.setState({
        headerShow: false,
      });
    }
  };

  toggleDrawer = value => {
    this.setState({
      drawerOpen: value,
    });
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: '#28a745',
          boxShadow: 'none',
          padding: '10px 0px',
        }}>
        <ToolBar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">PlantMoney</div>
            <div className="header_logo_title">
              Adventure Experience in Farming
            </div>
          </div>

          <Link
            textDecoration="none"
            color="white"
            aria-label="Profile"
            to={ROUTES.CART}>
            <CartIcon style={{color: 'ffffff'}} />
          </Link>

          <Link
            textDecoration="none"
            color="white"
            aria-label="Profile"
            to={ROUTES.PROFILE}>
            <ProfileIcon
              style={{
                color: 'ffffff',
                marginLeft: '30px',
                marginRight: '30px',
              }}
              className="navbar-menu"
            />
          </Link>
        </ToolBar>
      </AppBar>
    );
  }
}

export default navbar;
