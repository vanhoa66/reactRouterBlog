import React, { Component } from 'react';

class Home extends Component {
	
    render() {
    	const { from } = this.props.location.state || { from: { pathname: '/' } }
    	console.log(from);
        return (
            <div >
               <h3>Home</h3>
            </div>
        );
    }
}

export default Home;
