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
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          width: '500px',
          margin: '0 auto',
          justifyContent: 'space-between'
        }}
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
        <label htmlFor="name">
          Name:{' '}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="age">
          Age:{' '}
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="height">
          Height:{' '}
          <input
            type="text"
            name="height"
            value={form.height}
            onChange={handleChange}
          />
        </label>
        <button style={{ width: '100px', margin: '0 auto' }} type="submit">
          Add Smurf
        </button>
      </form>
    </div>
  );
});
