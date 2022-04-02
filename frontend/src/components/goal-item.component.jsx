import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goal.slice';

export const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();
  // console.log('goal', goal);
  return (
    <div className='goal'>
      <div>{new Date(goal.createdAt).toLocaleString('pt-BR')}</div>
      <h2>{goal.text}</h2>
      <button className='close' onClick={() => dispatch(deleteGoal(goal._id))}>
        X
      </button>
    </div>
  );
};
