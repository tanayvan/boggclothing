import React, { Component } from "react";
import Swiper from "swiper";
import p1 from "../images/1.jpg";
import p2 from "../images/2.jpg";
import p3 from "../images/3.jpg";
import "./imageslider.css";
export default class ImageSlider extends Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",

      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }
  render() {
    return (
      <div>
        <p className="text-center mt-3 popular-prod-heading">
          Popular Products
        </p>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <img className="swiper-slide" src={p1} alt="" />
            <img className="swiper-slide" src={p2} alt="" />
            <img className="swiper-slide" src={p3} alt="" />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  }
}
