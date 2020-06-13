import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="mt-5">
        <div className="footer-container">
          <div className="left-col">
            <img src="logo.png" alt="" className="logo" />
            <div className="social-media">
              <Link href="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
            <p className="rights-text">
              © 2020 Created By Tanay Van All Rights Reserved.
            </p>
          </div>

          <div className="right-col">
            <h1>Our Newsletter</h1>
            <div className="border"></div>
            <p>Enter Your Email to get updates for our offers and discount.</p>
            <form action="" className="newsletter-form">
              <input
                type="text"
                className="txtb"
                placeholder="Enter Your Email"
              />
              <input type="submit" className="btn" value="submit" />
            </form>
          </div>
        </div>
      </footer>
    );
  }
}
