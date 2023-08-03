import React from 'react';

const DiscountBadge = ({ discount, isSelected, isMonthlyPlan }) => {
  return (
    <div className={`discount-badge bg-red-200 text-red-600 px-2 py-1 rounded-md font-bold ml-2 ${isMonthlyPlan ? '' : isSelected ? 'selected' : ''}`}>
      Save {discount}
    </div>
  );
};

export default DiscountBadge;
