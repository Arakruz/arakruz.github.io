import React, {Component} from "react";
import {Icon} from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";

class About extends Component {
    render() {
        if (this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.about;
            var about = this.props.resumeBasicInfo.description;
        }

        return (
            <section id="about" className="section-content">
                <hr className="divider"></hr>
                <div className="col-md-12">
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
