// App.js
import React from 'react';
import MyContext from './Context';
import Git_Card from './Component/Git_Card';

function  userData() {
  const dataToProvide = "Hello from Context";

  return (
    <MyContext.Provider value={dataToProvide}>
      <Git_Card />
    </MyContext.Provider>
  );
}

export default userData;
