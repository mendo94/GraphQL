const { ApolloServer, gql } = require("apollo-server");

//Scaler type is a data type

const typeDefs = gql`
  type Query {
    hello: String
    numberOfAnimals: Int
    price: Float
    isCool: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "World";
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
