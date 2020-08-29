import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  funSetToggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div>
        <div className="container-fluid holder">
          <div className="container py-1">
            <nav className="navbar">
              <Link className="btn text-light p-0" to="/">
                <i className="fa fa-imdb fa-3x"></i>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
