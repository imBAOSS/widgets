import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './Widget';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Widget />, root);
});
