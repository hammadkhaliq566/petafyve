import { sliderTwoActive } from "@/src/sliderProps";
import Link from "next/link";
import { Component, Fragment } from "react";
import Slider from "react-slick";

export default class Hero4Slider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <div style={{ position: "relative" }}>
        <Slider
          {...sliderTwoActive}
          ref={(c) => (this.slider = c)}
          className="slider-two-active"
        >
          <div className="slider-item-two">
            <div className="container">
              <div className="slide-content">
                <span className="sub-title">Welcome to PetaFyve</span>
                <h2>Powering Infrastructure, Security, Cloud and DevOps</h2>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn mt-15 text-white">
                    Let&apos;s Get Started{" "}
                    <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="slider-image"
              style={{
                backgroundImage: "url(assets/images/slider/slider1.jpg)",
              }}
            />
          </div>
          <div className="slider-item-two">
            <div className="container">
              <div className="slide-content">
                <span className="sub-title">Unlocking the power of IT</span>
                <h2>Powering Infrastructure, Security, Cloud and DevOps</h2>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn mt-15 text-white">
                    Let&apos;s Get Started{" "}
                    <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="slider-image"
              style={{
                backgroundImage: "url(assets/images/slider/slider2.jpg)",
              }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
