import React, { Component } from 'react';

import { connect } from 'react-redux'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let { username, password } = this.state;
    this.props.login(username, password);
    
  }
  handleClick = () => {
    this.props.logout();  
  }
  render() {
    let { users } = this.props;
    if (users.isLogin === true) return <button onClick={this.handleClick}>Login</button>
    return (
      <div className="container">
        <div className="bg-faded p-4 my-4">
          <hr className="divider" />
          <h2 className="text-center text-lg text-uppercase my-0">Contact
          <strong>Form</strong>
          </h2>
          <hr className="divider" />
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="form-group col-lg-4">
                <label className="text-heading">Name</label>
                <input name="username" onChange={this.handleInputChange} type="text" className="form-control" />
              </div>
              <div className="form-group col-lg-4">
                <label className="text-heading">Pass</label>
                <input name="password" onChange={this.handleInputChange} type="password" className="form-control" />
              </div>
              <div className="form-group col-lg-12">
                <button type="submit" className="btn btn-secondary">Submit</button>
              </div>
            </div>
          </form>
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
const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => {
      dispatch({
        type: "LOG_IN",
        username,
        password
      })
    },
    logout: () => {
      dispatch({
        type: "LOG_OUT"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)

