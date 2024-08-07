import React, { Component } from "react";

class About extends Component {
		render () {
				let sectionName;
				let about;
				if (this.props.resumeBasicInfo) {
						sectionName = this.props.resumeBasicInfo.section_name.about;
						about = this.props.resumeBasicInfo.description;
				}

				return (
					<section id="about" className="section-content">
							<hr className="divider"></hr>
							<div className="hover-opacity">
									<h1 className="section-title">
											{sectionName}
									</h1>
									<span className="about-description">
                        {about}
                    </span>
							</div>
					</section>
				);
		}
}

export default About;
