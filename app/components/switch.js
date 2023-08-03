import React from 'react';
import './Switch.css'; 

const Switch = ({ isOn, handleToggle }) => {
  return (
    <label className="relative inline-block w-12 h-6">
      <input type="checkbox" checked={isOn} onChange={handleToggle} />
      <span className="slider"></span>
      <span className="absolute top-1/2 transform -translate-y-1/2 left-full w-200 text-sm text-black">{isOn ? 'Monthly Plan' : 'Annual Plan'}</span>
    </label>
    
  );
};

export default Switch;
