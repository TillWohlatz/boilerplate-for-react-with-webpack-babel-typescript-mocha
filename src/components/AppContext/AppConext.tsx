import * as React from "react";
import { Dispatch, SetStateAction } from "react";


export interface myState {
    count: number;
}
export interface AppContextInterface {
    count: myState;
    setCount: Dispatch<SetStateAction<myState>>;
}

const context = React.createContext<AppContextInterface | null>(null);

//const context = React.createContext({state:{count:number};});
export const ProviderContext = context.Provider;
export const ConsumerContext = context.Consumer;

