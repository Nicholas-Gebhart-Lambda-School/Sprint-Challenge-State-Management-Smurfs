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
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          width: '500px',
          margin: '0 auto'
        }}
        onSubmit={e => {
          deleteSmurf(form.id);
          setForm(formState);
        }}
      >
        <label htmlFor="id">
          Smurf ID
          <input
            type="number"
            name="id"
            value={form.id}
            onChange={handleChange}
          />
        </label>

        <button style={{ width: '100px', margin: '0 auto' }} type="submit">
          Yeet Smurf
        </button>
      </form>
    </div>
  );
});
