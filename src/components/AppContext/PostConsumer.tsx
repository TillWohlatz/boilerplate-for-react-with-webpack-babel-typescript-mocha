import React, { FunctionComponent } from 'react';
import { ConsumerContext } from './Appconext';

export const PostInfo: FunctionComponent<{}> = () => {
    return (
        <ConsumerContext>
            {appContext => appContext && (
                <div>
                    Count: {appContext.count},
                </div>
            )}
        </ConsumerContext>
    );
};
export const ChangeContext: FunctionComponent<{}> = () => {
    return (
        <ConsumerContext>
            {context => context && (
                < button onClick={() => context.count = context.count + 1}>
                    click
                </button>
            )}
        </ConsumerContext >
    );
}
