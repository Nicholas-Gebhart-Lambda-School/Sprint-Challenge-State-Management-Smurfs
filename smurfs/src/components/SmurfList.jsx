import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions';

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurf }
)(({ state, fetchSmurf }) => {
  useEffect(() => {
    fetchSmurf();
  }, []);

  return (
    <div>
      <h1>Smurf List</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
});
