import React, { Component } from "react";
import { Result, Button } from "antd";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/Footer";
import { Link } from "react-router-dom";
export default class OrderSucess extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Result
          status="success"
          title="Successfully Purchased Tshirt!"
          subTitle="Order number: 2017182818828182881 Delivery will take 3-5 days, please wait."
          extra={[
            <Button type="link" key="console">
              <Link to="/">Go To Homepage</Link>
            </Button>,
          ]}
        />
        <Footer />
      </div>
    );
  }
}
