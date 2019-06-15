import gql from "graphql-tag";

export default gql`
   query FindJawnProducts {
   // The FakerQL docs tell me I can query "allProducts" and get a  
   list of products back
   // I'm also specifying the fields I want returned for each
   Product: id, name, price
      allProducts {
         id
         name
         price
      }
   }
`;
