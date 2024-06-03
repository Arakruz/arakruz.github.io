import React, { Component } from "react";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

class ProjectDetailsSection extends Component {
		render () {
				let project_title;
				let project_subTitle;
				let project_description;
				let project_url;
				let project_img_alt;
				let project_date;
				let project_order;
				let project_img;
				let urlOnOff;
				let imageOnOff;
				let odd_project;
				let even_project;
				let tech;

				if (this.props.data) {
						const technologies = this.props.data.technologies;
						project_title = this.props.data.title;
						project_subTitle = this.props.data.subTitle;
						project_description = this.props.data.description;
						project_url = this.props.data.url;
						project_img_alt = this.props.data.imageAlt;
						project_date = this.props.data.startDate;
						project_order = this.props.order;
						project_img = this.props.data.image;
						urlOnOff = "";
						imageOnOff = "";

						if (this.props.data.technologies) {
								tech = technologies.map((icons, i) => {
										return (
											<li className="list-inline-item icon-list" key={i}>
              <span>
                <div className="text-center small-icons hover-expand">
                  <i className={icons.class} style={{ fontSize: "100%" }}>
                    <p className="text-center" style={{ fontSize: "40%" }}>
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
						odd_project = "odd-info-container";
						even_project = "";
				} else {
						odd_project = "even-info-container";
						even_project = "even";
				}

				if (project_url === "") {
						urlOnOff = "hidden";
				}

				if (project_img === "") {
						imageOnOff = "hidden";
				}

				return (
					<section id={project_title} className={project_order + " project-section hover-opacity"}>
							<div className={odd_project}>
									<h1 className="project-header">{project_title}</h1>
									<h2 className="project-subheader">{project_subTitle}</h2>
									<h3 className="project-date">{project_date}</h3>
							</div>

							<div className={odd_project + " project-information-container"}>
									<div className={imageOnOff + " project-image-container"}>
											<img src={project_img} loading={"lazy"} alt="blur effect" className="blur"></img>
											<img src={project_img} loading={"lazy"} alt={project_img_alt} className="project-image"></img>
									</div>

									<div className=" project-text-container">
											<div className={even_project + " details"}>
													<h1 className="summary">Summary</h1>
													<span className="description-text">{project_description}</span>
													<ul className="tech">
															{tech}
													</ul>
											</div>

											<a href={project_url} className={urlOnOff + " project-link"} target="_blank"
											   rel="noopener noreferrer">
													<p className="link-text">Project Files</p>

											</a>

									</div>
							</div>
							<hr className="divider"></hr>
					</section>
				);
		}
}

export default ProjectDetailsSection;
