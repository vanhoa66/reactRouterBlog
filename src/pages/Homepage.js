import React, { Component } from 'react';

import Slider from './../components/Slider'
import Content from './../components/Content'

class Homepage extends Component {
    render() {
        return (
            <div className="container">
                <Slider />
                <Content />
            </div>
        );
    }
}

export default Homepage;
