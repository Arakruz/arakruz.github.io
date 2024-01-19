import Switch from "react-switch";
import React, {Component} from "react";
import app from "../App.js";

class Nav extends Component {
    titles = [];

    constructor() {
        super();
        this.state = {checked: false, active: false};
        this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
    }

    onThemeSwitchChange(checked) {
        this.setState({checked});
        this.setTheme();
    }

    setTheme() {
        let dataThemeAttribute = "data-theme";
        let body = document.body;
        let newTheme =
            body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
        body.setAttribute(dataThemeAttribute, newTheme);
    }

    render() {
        let app = this.props.app;
        if (this.props.sharedData) {
            let name = this.props.sharedData.name;
            this.titles = this.props.sharedData.titles.map(x => [x.toUpperCase(), 1500]).flat();
        }

        return (
                <nav className="nav-bar">
                    <div className="option-container">
                        <div className="language-container">
                            <div
                                onClick={() =>
                                    app.applyPickedLanguage(
                                        window.$primaryLanguage,
                                        window.$secondaryLanguageIconId
                                    )
                                }
                                style={{display: "inline"}}
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
                                        window.$primaryLanguageIconId
                                    )
                                }
                                style={{display: "inline"}}
                            >
                                <span
                                    className="iconify language-icon"
                                    data-icon="twemoji-flag-for-flag-brazil"
                                    data-inline="false"
                                    id={window.$secondaryLanguageIconId}
                                ></span>
                            </div>
                        </div>
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
                                uncheckedIcon={
                                    <span
                                        className="iconify"
                                        data-icon="twemoji:crescent-moon"
                                        data-inline="false"
                                        style={{
                                            display: "block",
                                            height: "100%",
                                            fontSize: 25,
                                            textAlign: "end",
                                            marginLeft: "20px",
                                            color: "#353239",
                                        }}
                                    ></span>
                                }
                                checkedIcon={
                                    <span
                                        className="iconify"
                                        data-icon="noto-v1:sun"
                                        data-inline="false"
                                        style={{
                                            display: "block",
                                            height: "100%",
                                            fontSize: 25,
                                            textAlign: "end",
                                            marginLeft: "10px",
                                            color: "#353239",
                                        }}
                                    ></span>
                                }
                                id="icon-switch"
                            />
                        </div>
                    </div>
                    <div className="links">
                        <button className="nav-button"><a className="nav-link" href="#projects">Projects</a></button>
                        <button className="nav-button"><a className="nav-link" href="#about">About</a></button>
                        <button className="nav-button"><a className="nav-link" href="#contact">Contact</a></button>
                    </div>
                </nav>
        );
    }
}


export default Nav;