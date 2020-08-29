import React, { Component } from "react";
import "../index.css";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting.the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul className="footer-links">
                  <li>
                    <a href="a">Trending Movies</a>
                  </li>
                  <li>
                    <a href="a">Top-Rated Movies</a>
                  </li>
                  <li>
                    <a href="a">Popular Movies</a>
                  </li>
                  <li>
                    <a href="a">UpComing</a>
                  </li>
                  <li>
                    <a href="a">Top-Rated Series</a>
                  </li>
                  <li>
                    <a href="a">Popular Series</a>
                  </li>
                  <li>
                    <a href="a">Airing Today</a>
                  </li>
                  <li>
                    <a href="a">About to Air</a>
                  </li>
                </ul>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li>
                    <a href="a">About Us</a>
                  </li>
                  <li>
                    <a href="a">Contact Us</a>
                  </li>
                  <li>
                    <a href="a">Contribute</a>
                  </li>
                  <li>
                    <a href="a">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="a">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">
                  Copyright &copy; 2020 All Rights Reserved by{" "}
                  <i>Pegasus</i>
                </p>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li>
                    <a className="facebook" href="a">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="a">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a className="dribbble" href="a">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="a">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
