import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurf, postSmurf } from '../actions';

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurf, postSmurf }
)(({ state, fetchSmurf, postSmurf }) => {
  const [form, setForm] = useState({ name: '', age: 0, height: '' });

  useEffect(() => {
    fetchSmurf();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <h1>Smurf List</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            postSmurf({
              name: form.name,
              age: form.age,
              height: form.height
            });
          }}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
          />
          <input
            type="text"
            name="height"
            value={form.height}
            onChange={handleChange}
          />
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    </div>
  );
});
