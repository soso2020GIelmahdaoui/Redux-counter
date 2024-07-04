import React from 'react';
import {useDispatch ,useSelector} from  'react-redux'
import { Increment,Decrement } from './Component/CounterAction';
import './css/Counter.css';

export default function Counter(){
   const dispatch = useDispatch()
   const counter = useSelector(state => state.counter)
  return (
    <div className='counter_app'>
      <h1>Counter App</h1>
      <button className='decrement' onClick={()=>dispatch(Decrement())}>Decrement</button>
      <span>{counter}</span>
      <button className='increment' onClick={() =>dispatch(Increment())}>Increment</button>
      
     

    </div>
  )
}