import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class OurCollection extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center mt-5 mb-5">Our Collections</h1>
          <div className="row">
            <div className="col-6 ">
              <Link to="/collections">
                <img
                  src="https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="collection-image"
                  alt=""
                />
                <h1 className="text-center mt-2 head">T-Shirts</h1>
              </Link>
            </div>

            <div className="col-6 ">
              <Link to="/collections">
                <img
                  src="https://images.pexels.com/photos/3476/italian-italy-t-shirts.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="collection-image"
                  alt=""
                />
                <h1 className="text-center mt-2 head">Our Choices</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
