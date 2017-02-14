import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import Main from './Main';

const mapStateTopProps = (state) => {
  return {
      // define the all my state here
      // example posts: state.posts
    }
};

const mapDispachToProps = (dispach) => {
 return bindActionCreators (
    actionCreators,
    dispach
  );
};

const App = connect (
  mapStateTopProps,
  mapDispachToProps
)(MainContainer);


export default App;
