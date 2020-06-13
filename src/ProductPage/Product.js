import React, { Component } from "react";
import Navbar from "../homepage/Navbar";
import { Button, Collapse } from "antd";
import Footer from "../homepage/Footer";
import { Link } from "react-router-dom";

import Swiper from "swiper";
const { Panel } = Collapse;
const style = {
  "font-family": "Roboto",
};

export default class Product extends Component {
  state = {
    size: "large",
    p1:
      "https://images.unsplash.com/photo-1591790996041-794a96471f9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    p2:
      "https://images.unsplash.com/photo-1591618202064-6fa4703e1b0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    p3:
      "https://images.unsplash.com/photo-1591765015528-666f9d8ab410?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  };
  componentDidMount() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      loop: true,
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <img
                    className="swiper-slide"
                    src={this.state.p1}
                    alt=""
                    style={{
                      height: "100%",
                    }}
                  />
                  <img
                    className="swiper-slide"
                    src={this.state.p2}
                    alt=""
                    style={{
                      height: "100%",
                    }}
                  />
                  <img
                    className="swiper-slide"
                    src={this.state.p3}
                    alt=""
                    style={{
                      height: "100%",
                    }}
                  />
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div class="col-lg-6 col-12 mt-5">
              <h1 className="display-4">Bogg Tee V2</h1>
              <h4 className="text-muted">Men T-Shirt</h4>
              <h4 style={style}>Rs. 300</h4>

              <Button
                type="Default"
                className="size-btn"
                shape="circle"
                size="large"
              >
                S
              </Button>
              <Button
                type="Default"
                className="size-btn ml-2"
                shape="circle"
                size="large"
              >
                M
              </Button>
              <Button
                type="Default"
                className="size-btn ml-2"
                shape="circle"
                size="large"
              >
                L
              </Button>
              <Collapse accordion className="mt-3">
                <Panel header="Product Details" key="1">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nihil, delectus!
                  </p>
                </Panel>
              </Collapse>
              <Button
                type="Default"
                shape="round"
                size="large"
                className="mt-3"
              >
                Add To Bag
              </Button>
              <Button
                type="Default"
                shape="round"
                size="large"
                className="mt-3 ml-1"
              >
                WishList
              </Button>
              <Button
                type="Default"
                shape="round"
                size="large"
                className="mt-3 ml-1"
              >
                <Link to="/buy/productid">Buy Now</Link>
              </Button>
            </div>
          </div>
          <div className="my-4">
            <h1 className="text-center mt-4">Customer Review</h1>
            <h4 className="text-center">
              No Reviews yet <Button type="default">Write A Review</Button>
            </h4>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
