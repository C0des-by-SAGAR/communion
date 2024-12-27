import React from 'react';

const Container = ({ children, className = '' }) => {
  return (
    <div 
      className={`w-100 ${className}`}
      style={{
        maxWidth: '1519.2px',
        margin: '0 auto',
        padding: '0 20px'
      }}
    >
      {children}
    </div>
  );
};

export default Container; 