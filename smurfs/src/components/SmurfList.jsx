import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurf, postSmurf } from '../actions';

import AddSmurf from './AddSmurf';
import EditSmurf from './EditSmurf';

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurf, postSmurf }
)(({ state, fetchSmurf, postSmurf }) => {
  const formState = { name: '', age: 0, height: '' };
  const [form, setForm] = useState(formState);

  useEffect(() => {
    fetchSmurf();
  }, []);

  return (
    <div>
      <h1>Smurf List</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <h4>Add a Smurf</h4>
      <AddSmurf />
      <h4>Edit a Smurf</h4>
      <EditSmurf />
    </div>
  );
});
