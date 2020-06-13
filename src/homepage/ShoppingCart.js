import React, { Component } from "react";
import bag from "../bag.svg";
import { Button, Drawer, Badge } from "antd";
import { Link } from "react-router-dom";

export default class ShoppingCart extends Component {
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
      <div>
        <Drawer
          title="Shopping Cart"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={visible}
          key={placement}
        >
          <h5>
            Product 1: <span className="price">$15</span>
          </h5>
          <h5>
            Product 2: <span className="price">$5</span>{" "}
          </h5>
          <h5>
            Product 3: <span className="price">$8</span>{" "}
          </h5>
          <h5>
            Product 4: <span className="price">$2</span>{" "}
          </h5>
          <Button type="default mt-3">Place Order</Button>
        </Drawer>
        <Link className="nav-link cart" href="#" onClick={this.showDrawer}>
          <img src={bag} className="bagLogo" alt="logo" />
        </Link>
      </div>
    );
  }
}
