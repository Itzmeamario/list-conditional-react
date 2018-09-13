import React from 'react';
import './CharComponent.css';

const charComponent = ({ letter, deleteChar }) => {
  return (
    <div className="charComponent" onClick={deleteChar}>
      {letter}
    </div>
  );
};

export default charComponent;