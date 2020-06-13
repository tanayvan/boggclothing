import React, { Component } from "react";
import { Drawer } from "antd";
import ReactLogo from "../menu.png";
import ShoppingCart from "./ShoppingCart";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  state = { visible: false, placement: "left" };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  };
  render() {
    const { placement, visible } = this.state;

    return (
      <div className="tanay">
        <Drawer
          title="BOGG CLOTHING"
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={visible}
          key={placement}
        >
          <Link className="nav-sub-link" to="/collections">
            My Collections
          </Link>
          <Link className="nav-sub-link">Your Orders</Link>
          <Link className="nav-sub-link">Profile</Link>
          <Link className="nav-sub-link">Login/Register</Link>
        </Drawer>
        <nav className="nav">
          <span className="nav-link active" onClick={this.showDrawer}>
            <img src={ReactLogo} className="menuLogo" alt="logo" />
          </span>
          <Link className="nav-link brand" to="/">
            BOGG CLOTHING
          </Link>
          <ShoppingCart />
        </nav>
      </div>
    );
  }
}
