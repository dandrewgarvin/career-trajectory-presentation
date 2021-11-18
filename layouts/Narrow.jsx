import React from 'react';

const Narrow = ({ children, width = '50%', styleOverrides }) => (
  <div
    style={{
      width,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...styleOverrides,
    }}
  >
    {children}
  </div>
);

export default Narrow;
