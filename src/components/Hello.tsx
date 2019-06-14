import React, { FunctionComponent, useState } from 'react';

export const Hello: FunctionComponent<{ initial?: number }> = ({ initial }) => {

   //
   initial = initial ? initial : 0;
   const [clicks, setClicks] = useState(initial);
   return (
      <>
         <div>
            <p>You clicked {clicks} times</p>
            <button onClick={() => setClicks(clicks + 1)}>
               Click me
            </button>
         </div>
      </>
   );
}
