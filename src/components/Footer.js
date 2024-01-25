import React, {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="copyright">
                    <small>
                        Copyright &copy;{" "}
                        {this.props.sharedBasicInfo
                            ? this.props.sharedBasicInfo.name
                            : "???"}
                    </small>
                </div>
            </footer>
        );
    }
}

export default Footer;
