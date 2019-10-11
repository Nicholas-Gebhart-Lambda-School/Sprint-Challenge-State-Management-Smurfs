import React, { useState } from 'react';
import { connect } from 'react-redux';
import { putSmurf } from '../actions';

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  { putSmurf }
)(({ putSmurf }) => {
  const formState = { name: '', age: 0, height: '', id: 0 };
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
          putSmurf(form.id, {
            name: form.name,
            age: form.age,
            height: form.height
          });
          setForm(formState);
        }}
      >
        <input
          type="number"
          name="id"
          value={form.id}
          onChange={handleChange}
        />
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
        <button type="submit">Update Smurf</button>
      </form>
    </div>
  );
});
