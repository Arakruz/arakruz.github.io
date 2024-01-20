import React, { Component } from "react";
import ProjectDetailsSection from "./ProjectDetailsSection";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects, i) {
        let isOdd = i % 2 === 1 ? "odd": "even"
        return (
          <div
            key={projects.title}
          >
            <ProjectDetailsSection
                data={projects}
                order={isOdd}
            />
          </div>
        );
      });
    }

    return (
        <section id="projects" className="section-content">
          <div>
            <hr className="divider"></hr>
            <h1 className="section-title" style={{color: "black"}}>
              <span>{sectionName}</span>
            </h1>
            <div className="projects-container">
              {projects}
            </div>
          </div>
        </section>
    );
  }
}

export default Projects;
