import React from 'react';

const Container = ({ children, className = '' }) => {
  return (
    <div 
      className={`w-100 ph3 ph4-ns ${className}`}
      style={{
        maxWidth: '1519.2px',
        margin: '0 auto',
        padding: '0 1rem',
        '@media (min-width: 30em)': {
          padding: '0 1.5rem',
        },
        '@media (min-width: 60em)': {
          padding: '0 2rem',
        }
      }}
    >
      {children}
    </div>
  );
};

export default Container; 