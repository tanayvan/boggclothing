import React, { Component } from "react";
import Navbar from "../homepage/Navbar";
import CollectionCards from "./CollectionCards";
import Footer from "../homepage/Footer";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default class Collection extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <h1 className="text-center mt-5">Our Collection</h1>

          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 Card-Container mt-3 ">
                <Link to="/product">
                  <CollectionCards />
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 Card-Container mt-3 ">
                <CollectionCards />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 Card-Container mt-3 ">
                <CollectionCards />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 Card-Container mt-3 ">
                <CollectionCards />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 Card-Container mt-3 ">
                <CollectionCards />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
