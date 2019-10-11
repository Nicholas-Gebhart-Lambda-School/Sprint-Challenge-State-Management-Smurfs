import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions';

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  { postSmurf }
)(({ postSmurf }) => {
  const formState = { name: '', age: 0, height: '' };
  const [form, setForm] = useState(formState);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          postSmurf({
            name: form.name,
            age: form.age,
            height: form.height
          });
          setForm(formState);
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
  );
});
