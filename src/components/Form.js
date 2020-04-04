import React from 'react';

function Form(props){
  return (
    <div>
      <form onSubmit={props.getWeather}>
        <input type='text' name='city' placeholder='Enter City..'/>
        <input type='text' name='country' placeholder='Enter Country...'/>
        <button type='submit'>Get Weather</button>
      </form>
    </div>
  );
}

export default Form;