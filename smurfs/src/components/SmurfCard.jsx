import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const mapStateToProps = state => {
  return {
    state: state.delete
  };
};

export default connect(
  mapStateToProps,
  { deleteSmurf }
)(props => {
  console.log('smurf card', props);
  return (
    <div>
      <h3>Name: {props.smurf.name}</h3>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <p>ID: {props.smurf.id}</p>
      <button type="submit" onClick={() => props.deleteSmurf(props.smurf.id)}>
        Delete
      </button>
    </div>
  );
});
