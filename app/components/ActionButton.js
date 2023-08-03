import React from 'react';
// import './ActionButton.css';

const ActionButton = ({ onClick }) => {
  return (
    <button className="bg-red-600 ml-10 text-white px-5 py-2 w-1/3 rounded-md shadow-md cursor-pointer transition-transform hover:bg-red-700 transform hover:translate-y-[-2px]" onClick={onClick}>
      Choose Plan
    </button>
  );
};

export default ActionButton;
