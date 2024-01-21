import React, { Component } from "react";
import $ from "jquery";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Nav from "./components/Nav"
import Contact from "./components/Contact";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    let resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    let pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId).setAttribute("filter", "brightness(50%)");

    document
      .getElementById(pickedLangIconId).removeAttribute("filter");
  }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }


  render() {
    return (
      <div className="background">
        <Nav sharedData={this.state.sharedData.basic_info}
             app={this}
        />

        <div className="center">
          <Hero sharedData={this.state.sharedData.basic_info}
                sharedBasicInfo={this.state.resumeData.basic_info}
          />
          <About
              resumeBasicInfo={this.state.resumeData.basic_info}
              sharedBasicInfo={this.state.sharedData.basic_info}
          />
          <Projects
              resumeProjects={this.state.resumeData.projects}
              resumeBasicInfo={this.state.resumeData.basic_info}
          />
          <Skills
              gameSkills={this.state.sharedData.skills_game}
              sotfwareskills={this.state.sharedData.skills_software}
              dataSkills={this.state.sharedData.skills_data}
              resumeBasicInfo={this.state.resumeData.basic_info}
          />
          <Contact resumeProjects={this.state.resumeData.basic_info}
                   resumeBasicInfo={this.state.resumeData.basic_info}>

          </Contact>
        </div>

        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
