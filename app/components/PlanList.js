import React from 'react';
import './PlanList.css';
import '../globals.css';
import DiscountBadge from './DiscountBadge';


const plans = [
  { id: 1, name: 'Base Plan', price: '$12', discount: '30%' },
  { id: 2, name: 'Fuse Plan', price: '$24', discount: '30%' },
  { id: 3, name: 'Extro Plan', price: '$48', discount: '30%' },
  { id: 4, name: 'Universe Plan', price: '$96', discount: '30%' },
];

const PlanList = ({ selectedPlan, onPlanChange, isMonthlyPlan }) => {
  return (
    <div className="plan-list-container flex flex-col p-15 sm:mb-20 ">
      {plans.map(plan => (
      <label
      key={plan.id}
      className={`plan-item ml-0 h-20 sm:ml-20 flex items-center justify-between p-4 border border-teal-600 rounded-md mb-5 ${
        selectedPlan === plan.id && !isMonthlyPlan ? 'bg-teal-500 text-white' : 'bg-white text-black'
      }`}
    >
          <input
            type="radio"
            id={`plan-${plan.id}`}
            value={plan.id}
            checked={!isMonthlyPlan && selectedPlan === plan.id}
            onChange={() => onPlanChange(plan.id)}
          />
          <span className="checkmark"></span>
          <div className="flex flex-1 items-center container">
            <div className="text-2xl font-bold w-2/6 text-left">{plan.name}</div>
           
            <DiscountBadge
              discount={plan.discount}
              isSelected={selectedPlan === plan.id}
              isMonthlyPlan={isMonthlyPlan}
              />
            <div className="text-2xl font-bold ml-5">{plan.price}</div>
            <div>/Month</div>
          </div>
        </label>
      ))}
    </div>
  );
};


export default PlanList;
