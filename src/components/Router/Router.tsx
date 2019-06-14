import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { Hello } from "../Hello";
import { ReducerHello } from "../ReducerHello";
import { App } from "../AppContext/App";

export const Router: FunctionComponent<{}> = () => {


    return (
        <>
            <React.Fragment>
                <Switch>
                    <Route path="/reducer">
                        <ReducerHello />
                    </Route>
                    <Route path="/buddy">
                        <Hello initial={2} />
                    </Route>
                    <Route path="/app">
                        <App />
                    </Route>

                    <Route path="/">
                        <Hello />
                    </Route>

                </Switch>
            </React.Fragment>
        </>
    );
}

