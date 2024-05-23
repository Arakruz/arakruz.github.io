import React, { Component } from "react";
import { FaArrowDown } from "react-icons/fa";

class Hero extends Component {
		render () {
				let name;
				let profession_header;
				let hobby_header;
				let heroButton;
				let welcome;

				if (this.props.sharedData && this.props.sharedBasicInfo) {
						name = this.props.sharedData.name;
						profession_header = this.props.sharedBasicInfo.header_profession;
						hobby_header = this.props.sharedBasicInfo.header_hobby;
						heroButton = this.props.sharedBasicInfo.header_button;
						this.titles = this.props.sharedData.titles.map(x => [x.toUpperCase(), 1500]).flat();
						welcome = this.props.sharedBasicInfo.hello_message;
				}

				return (
					<section id="hero" className="hero">
							<div className="hero-details">
									<div className="hero-text">
											<p className="hero-one">{welcome} <span className="name">{name}</span></p>
											<p className="hero-two">{profession_header},</p>
											<p className="hero-three">{hobby_header}.</p>
									</div>
									<button type="button" className="view-button">
											<a href="#about">
													<span>{heroButton}</span>
													<FaArrowDown className="arrow"/>
											</a>
									</button>
							</div>
					</section>

				);
		}
}

export default Hero;
