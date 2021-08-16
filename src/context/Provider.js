// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';
import PropTypes from 'prop-types';

function Provider({ children }) {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const moveCar = (car, side) => {
    setCars({ ...cars, [car]: side })
  }

  const context = { cars, moveCar };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
