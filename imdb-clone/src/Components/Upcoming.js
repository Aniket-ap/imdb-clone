import React, { Component } from "react";
import Card from "./Card";
import Loader from "react-loader-spinner";
import { Consumer } from "./Context";

export default class Upcoming extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  funGetDetails = (id) => {
    this.props.history.push(`/details/${id}`);
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { upcomingMovies } = value;

          if (upcomingMovies.length === 0) {
            return (
              <div className="display-4 my-5 text-center">
                <Loader
                  type="BallTriangle"
                  color="#8e54e9"
                  height={100}
                  width={100}
                />
              </div>
            );
          } else {
            return (
              <div>
                <div className="display-4 mb-3">
                  Upcoming Movies <i className="fa fa-rss"></i>
                </div>
                <div className="row">
                  {upcomingMovies.map((movie) => (
                    <Card
                      key={movie.id}
                      movie={movie}
                      funGetDetails={this.funGetDetails}
                    />
                  ))}
                </div>
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}
