import React from 'react';

export default props => {
  console.log('smurf', props);
  return (
    <>
      <h3>Name: {props.smurf.name}</h3>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <p>ID: {props.smurf.id}</p>
    </>
  );
};
