import Switch from "react-switch";
import React, { Component } from "react";

class Nav extends Component {
		titles = [];

		constructor () {
				super();
				this.state = { checked: false, active: false };
				this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
		}

		onThemeSwitchChange (checked) {
				this.setState({ checked });
				this.setTheme();
		}

		setTheme () {
				let dataThemeAttribute = "data-theme";
				let body = document.body;
				let newTheme =
					    body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
				body.setAttribute(dataThemeAttribute, newTheme);
		}

		render () {
				let app = this.props.app;
				if (this.props.sharedData) {
						this.titles = this.props.sharedData.titles.map(x => [x.toUpperCase(), 1500]).flat();
				}

				return (
					<nav className="nav-bar">
							<div className="option-container">
									<div className="theme-container">
											<Switch
												checked={this.state.checked}
												onChange={this.onThemeSwitchChange}
												offColor="#353535"
												onColor="#C18644"
												className="react-switch mx-auto"
												width={90}
												height={40}
												offHandleColor="#EEF0EB"
												onHandleColor="#282424"
												aria-label="Theme Toggle"
												uncheckedIcon={
														<svg height="100%" width="100%" viewBox="-50 -860 1000 1000" fill="#F7B538">
																<path
																	d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/>
														</svg>
												}
												checkedIcon={
														<svg height="100%" width="100%" viewBox="-50 -860 1000 1000"
														     fill="#160E0E">
																<path
																	d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/>
														</svg>
											}
												id="icon-switch"/>
									</div>
									<div className="language-container">
											<div
												onClick={() =>
													app.applyPickedLanguage(
														window.$primaryLanguage,
														window.$secondaryLanguageIconId,
													)
												}
												style={{ display: "inline" }}
											>
                                <span
	                                className="iconify language-icon mr-5"
	                                data-icon="twemoji-flag-for-flag-united-kingdom"
	                                data-inline="false"
	                                id={window.$primaryLanguageIconId}
                                ></span>
											</div>
											<div
												onClick={() =>
													app.applyPickedLanguage(
														window.$secondaryLanguage,
														window.$primaryLanguageIconId,
													)
												}
												style={{ display: "inline" }}
											>
                                <span
	                                className="iconify language-icon"
	                                data-icon="twemoji-flag-for-flag-brazil"
	                                data-inline="false"
	                                id={window.$secondaryLanguageIconId}
                                ></span>
											</div>
									</div>
							</div>
							<div className="nav-links-container">
									<a className="nav-link" href="#hero">Home</a>
									<a className="nav-link" href="#about">About</a>
									<a className="nav-link" href="#projects">Projects</a>
									<a className="nav-link" href="#skills">Skills</a>
									<a className="nav-link" href="#contact">Contact</a>
							</div>
					</nav>
				);
		}
}

export default Nav;