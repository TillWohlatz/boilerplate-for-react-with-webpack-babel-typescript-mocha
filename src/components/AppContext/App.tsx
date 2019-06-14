import { AppContextInterface, ProviderContext } from "./Appconext";
import { } from "webpack";
import React, { useState } from "react";
import { PostInfo, ChangeContext } from "./PostConsumer";



export const App = () => {
      const [count, setCount] = useState(syncData);
      test:Discpatch
    return (
        <>
            <ProviderContext value={{count,setCount}}>
                <ChangeContext />
                <PostInfo />
            </ProviderContext>

        </>
    );
}