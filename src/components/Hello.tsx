import React from "react";
// import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

interface IProps {
   compiler: string;
   framework: string;
   bundler: string;
}

const client: ApolloClient<any> = new ApolloClient({
   link: new HttpLink({
      uri: "https://fakerql.com/graphql",
      // Remember, we only need ONE endpoint!
   }),
   cache: new InMemoryCache(),
});

export class Hello extends React.Component<IProps, {}> {
   console.dir(client);

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




