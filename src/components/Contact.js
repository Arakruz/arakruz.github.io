import {Component} from "react";

class Contact extends Component {
    render() {
        if (this.props.resumeBasicInfo) {
            let sectionName = this.props.resumeBasicInfo.section_name.contact;

        return (
            <div>
                <section id="contact">
                    <h1 className="section-title">{sectionName}</h1>
                    <div className="col-md-12 contact-info">
                        <h2 className="get-in-touch">Want to get in touch?</h2>
                        <a href="mailto:contact@pedronovais.com" className="email">
                            <h2>contact@pedronovais.com</h2>
                        </a>
                    </div>
                </section>
            </div>
        );
    }
}
}

export default Contact;