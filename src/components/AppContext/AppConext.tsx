import * as React from "react";


export interface AppContextInterface {
    count: number;
    setCount: Dispatch<
}    
const context = React.createContext<AppContextInterface | null>(null);
export const ProviderContext = context.Provider;
export const ConsumerContext = context.Consumer;

