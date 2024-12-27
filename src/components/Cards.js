import React from 'react';

const Card = ({ children }) => {
  return (
    <div 
      className="pa4 br3 shadow-1"
      style={{ 
        backgroundColor: 'var(--color-card-grey)',
        transition: 'transform 0.2s ease'
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      {children}
    </div>
  );
};

export default Card; 