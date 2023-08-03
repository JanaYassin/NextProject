"use client";
import React, { useState } from 'react';
import PlanList from './components/PlanList';
import PlanDetails from './components/PlanDetails';
import Switch from './components/switch';
import ActionButton from './components/ActionButton';
import './App.css';
import './globals.css';

const App = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(false);

  const handlePlanChange = (planId) => {
    setSelectedPlan(planId);
  };

  const handleTogglePlanType = () => {
    setIsMonthlyPlan((prevIsMonthlyPlan) => !prevIsMonthlyPlan);
  };

  return (
    <div className='text-center w-full min-h-screen bg-white sm:bg-white md:bg-white'>
      <div className='relative'>
        <h1  className="text-5xl font-bold text-blue-900">Choose Your Plan</h1>
        <div className='text-slate-300 text-xl font-bold'>No Contract and No Surprise Fees</div>
        <div className='m-5 space-y-2'>
          <Switch isOn={isMonthlyPlan} handleToggle={handleTogglePlanType} />
        </div>
        <div className='relative flex flex-col w-full sm:flex-row space-x-1 sm:space-x-4 md:space-x-8 lg:space-x-10'>
        <PlanList
           selectedPlan={selectedPlan}
           onPlanChange={handlePlanChange}
           isMonthlyPlan={isMonthlyPlan} 
          />
          <a href='#' class='back-link fixed bottom-20 left-4 flex text-gray-400 text-base '>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' class='w-5 h-5 mr-1'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10 19l-7-7m0 0l7-7m-7 7h18'/>
          </svg>
           Back
          </a>


          <div  className='w-full ml-10 sm:flex-3 md:ml-10'>
            <PlanDetails selectedPlan={selectedPlan}  isMonthlyPlan={isMonthlyPlan}/>
            <ActionButton  onClick={() => console.log('Button clicked')} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default App;
