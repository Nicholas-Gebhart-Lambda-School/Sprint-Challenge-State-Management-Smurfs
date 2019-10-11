import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  { deleteSmurf }
)(({ deleteSmurf }) => {
  const formState = { id: 0 };
  const [form, setForm] = useState(formState);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={e => {
          deleteSmurf(form.id);
          setForm(formState);
        }}
      >
        <input
          type="number"
          name="id"
          value={form.id}
          onChange={handleChange}
        />

        <button type="submit">Yeet Smurf</button>
      </form>
    </div>
  );
});
