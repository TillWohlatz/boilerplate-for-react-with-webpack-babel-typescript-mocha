import React, { FunctionComponent } from 'react';
import { ConsumerContext } from './Appconext';

export const PostInfo: FunctionComponent<{}> = () => {
    return (
        <ConsumerContext>
            {
                appContext =>
                    logIt(appContext) &&
                    appContext && (

                        < div >
                            Count: {appContext.count.count}
                        </div>
                    )

            }
        </ConsumerContext >
    );
};
function logIt(obj: any): boolean {
    console.dir(obj);
    return true;
}
let incr: number = 0;
export const ChangeContext: FunctionComponent<{}> = () => {
    return (
        <ConsumerContext>
            {context => context &&
                logIt(context) && (
                    < button onClick={() => {

                        context.setCount(preCount => {
                            preCount.count++;
                            console.log("current incr: ", incr++, " next count:", preCount.count);
                            return preCount;
                        });
                    }

                    }>
                        click
                </button>
                )}
        </ConsumerContext >
    );
}
