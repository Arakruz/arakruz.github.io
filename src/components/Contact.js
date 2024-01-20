import {Component} from "react";

class Contact extends Component {
    render() {
        if (this.props.resumeBasicInfo) {
            let sectionName = this.props.resumeBasicInfo.section_name.contact;

        return (
            <div>
                <section>
                    <h1 className="section-title">{sectionName}</h1>
                </section>
            </div>
        );
    }
}
}

export default Contact;