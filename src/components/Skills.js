import React, {Component} from "react";

class Skills extends Component {
    render() {
        if (this.props.gameSkills && this.props.resumeBasicInfo && this.props.webskills && this.props.dataSkills) {
            let sectionName = this.props.resumeBasicInfo.section_name.skills;
            let gameSkills = this.props.gameSkills.icons.map(this.createSkillTile);
            let webSkills = this.props.webskills.icons.map(this.createSkillTile);
            let dataSkills = this.props.dataSkills.icons.map(this.createSkillTile);

            return (
                <section id="skills" className="section-content">
                    <div>
                        <h1 className="section-title"> {sectionName}</h1>
                    </div>
                    <div className="col-md-12 text-center skills-container">
                        <div className="icon-container">
                            <h2>Web</h2>
                            <ul className="list-inline mx-auto skill-list software-skills">{webSkills}</ul>
                        </div>
                        <div className="icon-container">
                            <h2>Games</h2>
                            <ul className="list-inline mx-auto skill-list">{gameSkills}</ul>
                        </div>
                        <div className="icon-container">
                            <h2 style={{marginLeft: '1em'}}>Data & Software</h2>
                            <ul className="list-inline mx-auto skill-list">{dataSkills}</ul>
                        </div>
                    </div>
                    <hr className="divider"></hr>
                </section>
            );
        }
    }


    createSkillTile(skill, index) {
        return (
            <li className="list-inline-item mx-3" key={index}>
            <span>
              <div className="text-center skills-tile hover-expand">
                <i className={skill.class} style={{fontSize: "220%"}}>
                  <p
                      className="text-center"
                      style={{fontSize: "30%", marginTop: "4px"}}
                  >
                    {skill.name}
                  </p>
                </i>
              </div>
            </span>
            </li>
        );
    }
}


export default Skills;
