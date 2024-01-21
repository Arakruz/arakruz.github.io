import React, { Component } from "react";
import Switch from "react-switch";

class Hero extends Component {
  render() {

    if (this.props.sharedData && this.props.sharedBasicInfo) {
      var name = this.props.sharedData.name;
      var software = this.props.sharedBasicInfo.header_profession;
      var videoGame = this.props.sharedBasicInfo.header_hobby;
      var heroButton = this.props.sharedBasicInfo.header_button;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
      var hello = this.props.sharedBasicInfo.hello_message;
    }


    return (
        <section id="hero" className="hero">
          <div className="hero-details">
            <div className="hero-text">
              <p className="hero-one">{hello} <span className="name">{name}</span></p>
              <p className="hero-two">{software}</p>
              <p className="hero-three">{videoGame}</p>
            </div>
            <button type="button" className="view-button">
              <a href="#about">
                <span>{heroButton}</span>
              </a>
            </button>
          </div>
        </section>

    );
  }
}

export default Hero;
