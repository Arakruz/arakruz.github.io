import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/themes/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/themes/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import {FiArrowUpRight} from "react-icons/fi"

class ProjectDetailsSection extends Component {
  render() {
    if (this.props.data) {
      const technologies = this.props.data.technologies;
      var title = this.props.data.title;
      var subTitle = this.props.data.subTitle;
      var description = this.props.data.description;
      var url = this.props.data.url;
      var alt = this.props.data.imageAlt;
      var date = this.props.data.startDate;
      var order = this.props.order;
      var img = this.props.data.image;
      var onOff = "";

      if (this.props.data.technologies) {
        var tech = technologies.map((icons, i) => {
          return (
            <li className="list-inline-item mx-4" key={i}>
              <span>
                <div className="text-center small-icons hover-expand">
                  <i className={icons.class} style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {icons.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        });
      }
    }

    if (this.props.order === "odd") {
      var odd = "odd-info-container";
      var even = "";
    } else {
      var odd = "even-info-container";
      var even = "even";
    }

    if (url === "") {
      onOff = "hidden"
    }

    return (
        <section id={title} className={order + " project-section hover-opacity"}>
          <div className={odd}>
            <h1 className="project-header">{title}</h1>
            <h2 className="project-subheader">{subTitle}</h2>
            <h3 className="project-date">{date}</h3>
          </div>

          <div className={odd + " project-information-container"}>
            <div className="project-image-container">
              <img src={img} alt="blur effect" className="blur"></img>
              <img src={img} alt={alt} className="project-image"></img>
            </div>

            <div className=" project-text-container">
              <div className={even + " details"}>
                <h1 className="summary">Summary</h1>
                <span className="description-text">{description}</span>
                <div className="tech">
                  {tech}
                </div>
              </div>

              <a href={url} className={onOff + " project-link"}>
                  <p className="link-text">Project Files</p>
                <FiArrowUpRight />
              </a>

            </div>
          </div>
          <hr className="divider"></hr>
        </section>
    );
  }
}

export default ProjectDetailsSection;
