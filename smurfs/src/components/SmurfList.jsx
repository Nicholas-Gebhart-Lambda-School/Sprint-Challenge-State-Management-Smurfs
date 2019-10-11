import React, { useEffect, useState } from 'react';
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
  const [add, setAdd] = useState(true);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetchSmurf();
  }, [fetchSmurf]);

  return (
    <div>
      {add ? (
        <div>
          <button
            onClick={() => {
              setEdit(true);
              setAdd(false);
            }}
          >
            Switch to Edit Mode
          </button>
          <h4>Add a Smurf</h4>
          <AddSmurf />
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              setEdit(false);
              setAdd(true);
            }}
          >
            Switch to Add Mode
          </button>
          <h4>Edit a Smurf</h4>
          <EditSmurf />
        </div>
      )}

      {/* <AddSmurf /> */}

      <h4>Delete smurf by ID</h4>
      <DeleteSmurf />
      <h1>Smurf List</h1>
      {state.smurfs.map(smurf => {
        return <SmurfCard key={smurf.id} smurf={smurf} />;
      })}
    </div>
  );
});
