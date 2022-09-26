import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import images from "src/static/images/images";
import Slider from "react-slick";

const CardSlider = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div id="slider">
      <div className="slider1_container">
        <Slider {...settings} ref={sliderRef}>
          <Link to="/" title="Rượu Sake - truyền thống Nhật Bản">
            <img
              u="image"
              src={images.slider1}
              alt="Rượu Sake - truyền thống Nhật Bản"
            />
          </Link>
          <Link to="/" title="Rượu Sake - truyền thống Nhật Bản">
            <img
              u="image"
              src={images.slider1}
              alt="Rượu Sake - truyền thống Nhật Bản"
            />
          </Link>
        </Slider>
      </div>
      <span u="arrowleft" className="jssora05l" onClick={gotoPrev} />
      <span u="arrowright" className="jssora05r" onClick={gotoNext} />
    </div>
  );
};

export default CardSlider;
