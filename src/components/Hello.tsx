import * as React from "react";

interface IProps {
   compiler: string;
   framework: string;
   bundler: string;
}

export class Hello extends React.Component<IProps, {}> {
   public render() {
      return (
         <div id="main">
            <h1>This is a&nbsp;
               {this.props.framework}&nbsp;application using&nbsp;
               {this.props.compiler}&nbsp;
               with&nbsp;{this.props.bundler}
            </h1>
         </div>
      );
   }
}
