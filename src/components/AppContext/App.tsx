import { ProviderContext, myState, AppContextInterface } from "./Appconext";
import { } from "webpack";
import React, { useState } from "react";
import { PostInfo, ChangeContext } from "./PostConsumer";


// const initalState: myState = { count: 3 }

const initialState: myState = { count: 0 };
export const App = () => {
    console.log("inital state set");
    //const [count, setCount] = useState(initalState);
    const [count, setCount] = useState(initialState);

    return (
        <>
            <ProviderContext value={{ count, setCount } as AppContextInterface}>
                <div> Outer context: {count.count}</div>
                <ChangeContext />
                <PostInfo />
            </ProviderContext>

        </>
    );
}