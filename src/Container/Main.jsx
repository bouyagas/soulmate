import React, { PropTypes, Component } from 'react';
import Welcome from '../Components/Welcome/Welcome';
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
           <Welcome />
           { this.props.children && React.cloneElement(this.props.children, {

           })}
          </div>
        );
    }

}

