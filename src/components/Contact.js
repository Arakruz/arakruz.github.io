import React, {Component} from "react";

class Contact extends Component {

    render() {
      let networks;

        if (this.props.sharedBasicInfo) {
             networks = this.props.sharedBasicInfo.social.map(function (network) {
                return (
                    <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer" aria-describedby={network.alt}>
              <i className={network.class + " hover-expand"}></i>
            </a>
          </span>
                );
            });
        }

        if (this.props.resumeBasicInfo) {
            let sectionName = this.props.resumeBasicInfo.section_name.contact;

            return (
                <section id="contact">
                    <h1 className="section-title">{sectionName}</h1>
                    <div className="col-md-12 contact-info">
                        <h2 className="get-in-touch">Want to get in touch?</h2>
                        <a href="mailto:contact@pedronovais.com" className="email" target="_blank" rel="noopener noreferrer">
                            <p className="link-text">contact@pedronovais.com</p>
                        </a>
                        <div className="social-links">{networks}</div>
                    </div>
                </section>
            );
        }
    }
}

export default Contact;