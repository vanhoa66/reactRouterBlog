import React, { Component } from 'react';
import {
  Redirect 
} from 'react-router-dom'
import { connect } from 'react-redux'

class Blog extends Component {
  render() {
    let { users } = this.props;
    if (users.isLogin === false) return <Redirect to='/contact'/>
    return (
      <div className="container">
        <div className="bg-faded p-4 my-4">
          <div className="card card-inverse">
            <img className="card-img img-fluid w-100" src="img/slide-1.jpg" alt="blog" />
            <div className="card-img-overlay bg-overlay">
              <h2 className="card-title text-shadow text-white text-uppercase mb-0">Post Title</h2>
              <h4 className="text-shadow text-white">March 1, 2017</h4>
              <p className="lead card-text text-shadow text-white w-50 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit repellat provident quo aliquam eius ea, animi porro magnam totam dolor nam error quas labore eveniet dicta nostrum inventore veniam. Ipsam?</p>
              <a className="btn btn-secondary">Read More</a>
            </div>
          </div>
        </div>
        <div className="bg-faded p-4 my-4">
          <div className="card card-inverse">
            <img className="card-img img-fluid w-100" src="img/slide-2.jpg" alt="blog" />
            <div className="card-img-overlay bg-overlay">
              <h2 className="card-title text-shadow text-white text-uppercase mb-0">Post Title</h2>
              <h4 className="text-shadow text-white">March 1, 2017</h4>
              <p className="lead card-text text-shadow text-white w-50 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit repellat provident quo aliquam eius ea, animi porro magnam totam dolor nam error quas labore eveniet dicta nostrum inventore veniam. Ipsam?</p>
              <a className="btn btn-secondary">Read More</a>
            </div>
          </div>
        </div>
        <div className="bg-faded p-4 my-4">
          <div className="card card-inverse">
            <img className="card-img img-fluid w-100" src="img/slide-3.jpg" alt="blog" />
            <div className="card-img-overlay bg-overlay">
              <h2 className="card-title text-shadow text-white text-uppercase mb-0">Post Title</h2>
              <h4 className="text-shadow text-white">March 1, 2017</h4>
              <p className="lead card-text text-shadow text-white w-50 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit repellat provident quo aliquam eius ea, animi porro magnam totam dolor nam error quas labore eveniet dicta nostrum inventore veniam. Ipsam?</p>
              <a  className="btn btn-secondary">Read More</a>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="bg-faded p-4 my-4">
          <ul className="pagination justify-content-center mb-0">
            <li className="page-item">
              <a className="page-link" >← Older</a>
            </li>
            <li className="page-item disabled">
              <a className="page-link" >Newer →</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users,
  }
}

export default connect(mapStateToProps, null)(Blog)
