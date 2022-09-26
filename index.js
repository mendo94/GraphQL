const { ApolloServer, gql } = require("apollo-server");

//Scaler type is a data type
//[string!]! is say if there is not a string, return null and the second bang is saying do not return null - return nothing.

const typeDefs = gql`
  type Query {
    hello: [String!]!
    products: [Product!]!
  }
  # Object type is [Product]
  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return ["hello", "my", "friend"];
    },
    products: () => [
      {
        name: "Bike",
        description: "Mountain Bike",
        price: "3444",
        onSale: false,
      },
    ],
  },
};

// in the graphql studio, query products and specify what you want returned.
// query {
//     products {
//       name
//       price
//     }
//     }
// output =
// {
//     "data": {
//       "products": [
//         {
//           "name": "Bike",
//           "price": 3444
//         }
//       ]
//     }
//   }
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Sever is running at " + url);
});
