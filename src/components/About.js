import React, {Component} from "react";
import {Icon} from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";

class About extends Component {
    render() {
        if (this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.about;
            var hello = this.props.resumeBasicInfo.description_header;
            var about = this.props.resumeBasicInfo.description;
        }

        return (
            <section id="about">
                <div className="col-md-12">
                    <h1 style={{color: "black"}}>
                        <span>{sectionName}</span>
                    </h1>

                </div>
            </section>
        );
    }
}

export default About;
