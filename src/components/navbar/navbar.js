import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import ProfileIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import CartIcon from '@material-ui/icons/ShoppingBasket';

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
          backgroundColor: '#e0be63',
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
          <IconButton
            aria-label="Cart"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}>
            <CartIcon />
          </IconButton>
          <IconButton
            aria-label="Profile"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}>
            <ProfileIcon />
          </IconButton>
        </ToolBar>
      </AppBar>
    );
  }
}

export default navbar;
