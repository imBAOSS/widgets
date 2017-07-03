import React from 'react';
import Clock from './frontend/clock';
import Weather from './frontend/weather';
import Autocomplete from './frontend/autocomplete';

const names = ["Stacy", "Jess", "Jim", "James", "Julie"];

const Widget = () => (
  <div>
    <Clock />
    <Weather />
    <Autocomplete props={ names }/>
  </div>
)

export default Widget;
