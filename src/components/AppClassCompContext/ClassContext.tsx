
import React from "react";
import { PostInfo } from "./PostInfo";
import { ChangeContext } from "./ChangeContext";


export interface ClassState {
    count: number;
    setCount(count: number): void;
}

export const Context = React.createContext<ClassState | null>(null);


export class ClassContext extends React.Component<{}, ClassState>{
    constructor(props: any) {
        super(props);
        console.log("inital state set");
        this.setCount = this.setCount.bind(this)
        this.state = { count: 0, setCount: this.setCount };
    }
    setCount(count: number) {
        this.setState((priorState) => (
            {
                count: count,
                setCount: this.setCount
            }));
    }
    render() {
        return (
            <>
                <Context.Provider value={this.state}>
                    <div> Outer context: {this.state.count}</div>
                    <ChangeContext />
                    <PostInfo />
                </Context.Provider>

            </>
        );
    }
}