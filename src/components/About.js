import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="bg-faded p-4 my-4">
          <hr className="divider" />
          <h2 className="text-center text-lg text-uppercase my-0">About
          <strong>Business Casual</strong>
          </h2>
          <hr className="divider" />
          <div className="row">
            <div className="col-lg-6">
              <img className="img-fluid mb-4 mb-lg-0" src="img/slide-2.jpg" alt="about" />
            </div>
            <div className="col-lg-6">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam soluta dolore voluptatem, deleniti dignissimos excepturi veritatis cum hic sunt perferendis ipsum perspiciatis nam officiis sequi atque enim ut! Velit, consectetur.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam pariatur perspiciatis reprehenderit illo et vitae iste provident debitis quos corporis saepe deserunt ad, officia, minima natus molestias assumenda nisi velit?</p>
            </div>
          </div>
        </div>
        <div className="bg-faded p-4 my-4">
          <hr className="divider" />
          <h2 className="text-center text-lg text-uppercase my-0">Our
          <strong>Team</strong>
          </h2>
          <hr className="divider" />
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card h-100">
                <img className="card-img-top" src="http://placehold.it/750x450" alt="about" />
                <div className="card-body text-center">
                  <h4 className="card-title m-0">John Smith
                  <small className="text-muted">Job Title</small>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card h-100">
                <img className="card-img-top" src="http://placehold.it/750x450" alt="about" />
                <div className="card-body text-center">
                  <h4 className="card-title m-0">John Smith
                  <small className="text-muted">Job Title</small>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <img className="card-img-top" src="http://placehold.it/750x450" alt="about" />
                <div className="card-body text-center">
                  <h4 className="card-title m-0">John Smith
                  <small className="text-muted">Job Title</small>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
