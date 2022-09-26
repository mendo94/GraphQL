const { ApolloServer, gql } = require("apollo-server");

//Scaler type is a data type
//string!]! is say if there is not a string, return null and the second bang is saying do not return null - return nothing.

const typeDefs = gql`
  type Query {
    hello: [String!]!
    numberOfAnimals: Int
    price: Float
    isCool: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return ["hello", "my", "friend"];
    },
    numberOfAnimals: () => {
      return 88;
    },
    price: () => {
      return 99.99;
    },
    isCool: () => {
      return false;
    },
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Sever is running at " + url);
});
