import React, { PropTypes, Component } from 'react';

import './Main.css'

export default class Main extends React.Component {

    static defaultProps = {};

    static propTypes = {};

    constructor(props) {
      super(props);

        this.state = {
        // states goes here !!!
      };
    }

    render() {
        return (
          <div className="ui container">
           <h1>Welcome soulmate javacript web framework</h1>
           { this.props.children && React.cloneElement(this.props.children, {

           })}
          </div>
        );
    }

}

