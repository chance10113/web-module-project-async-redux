import React, { useEffect } from "react";
import { connect } from "react-redux";

function Gallery(props) {
  const { src, isFetching, error } = props;

  return <div className="container">
      <h2>  This is where stuff is supposed to go!
      </h2>
  </div>;
}

const mapStateToProps = (state) => {
  return {
    src: state.src,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(Gallery);