import React, { Component } from 'react';
import { Context } from './ClassContext';

export class PostInfo extends Component<{}, | {}> {

    render() {
        return (
            <Context.Consumer>
                {
                    appContext =>
                        logIt(appContext) &&
                        appContext && (

                            < div >
                                Count: {appContext.count}
                            </div>
                        )

                }
            </Context.Consumer >
        );
    }
};

function logIt(obj: any): boolean {
    console.dir(obj);
    return true;
}