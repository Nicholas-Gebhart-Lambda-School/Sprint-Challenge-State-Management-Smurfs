import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurf, postSmurf } from '../actions';

import AddSmurf from './AddSmurf';
import EditSmurf from './EditSmurf';
import DeleteSmurf from './DeleteSmurf';
import SmurfCard from './SmurfCard';

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurf, postSmurf }
)(({ state, fetchSmurf }) => {
  useEffect(() => {
    fetchSmurf();
  }, [fetchSmurf]);

  return (
    <div>
      <h4>Add a Smurf</h4>
      <AddSmurf />
      <h4>Edit a Smurf</h4>
      <EditSmurf />
      <h4>Delete smurf by ID</h4>
      <DeleteSmurf />
      <h1>Smurf List</h1>
      {state.smurfs.map(smurf => {
        return <SmurfCard key={smurf.id} smurf={smurf} />;
      })}
    </div>
  );
});
