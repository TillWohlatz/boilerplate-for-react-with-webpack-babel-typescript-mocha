import React, { FunctionComponent, useReducer } from 'react';
type ActionType = {
   type: 'reset' | 'decrement' | 'increment'
}

const initialState = { count: 0 };

// We only need to set the type here ...
function reducer(state: { count: number }, action: ActionType) {
   switch (action.type) {
      // ... to make sure that we don't have any other strings here ...
      case 'reset':
         return initialState;
      case 'increment':
         return { count: state.count + 1 };
      case 'decrement':
         return { count: state.count - 1 };
      default:
         return state;
   }
}

export const ReducerHello: FunctionComponent<{}> = () => {
   const [state, dispatch] = useReducer(reducer, initialState);
   return (
      <>
         Count: {state.count}
     
         <button onClick={() => dispatch({ type: 'reset' })}>
            Reset
       </button>
         <button onClick={() => dispatch({ type: 'increment' })}>+</button>
         <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      </>
   );
}
