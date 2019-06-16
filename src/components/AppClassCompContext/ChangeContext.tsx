import React, { Component } from 'react';
import { Context } from './ClassContext';



let incr: number = 0;
export class ChangeContext extends Component<{}, {}> {

    render() {
        return (
            <Context.Consumer>
                {context => context &&
                    logIt(context) && (
                        < button onClick={() => {
                            let currentCount = context.count;
                            console.log("current incr: ", incr++, " next count:", ++currentCount);
                            context.setCount(currentCount);
                        }

                        }>
                            click
                </button>
                    )}
            </Context.Consumer >
        );
    }
}
function logIt(obj: any): boolean {
    console.dir(obj);
    return true;
}
