import React from 'react';
import {connect} from 'react-redux';

export const Home = (props) => {
  return (
    <div className="content">
      <h1>Welcome home!</h1>
      <p>This is the home page</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentTime: state.currentTime
  }
}
export default connect(
  mapStateToProps
)(Home);
