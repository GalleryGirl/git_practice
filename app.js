const { ApolloServer, gql } = require('apollo-server');
const forgivenessData = require('./forgivenessData');

//The Graphql Schema
const typeDefs = gql`
  type Query {
      forgivenesses: [Forgiveness]
  }
  type Forgiveness {
      _id: ID!
      title: String!
      content: String
  }
  `;

  //A map of functions which return data for the schema.
  const resolvers = {
      Query: {
          forgivenesses: () => forgivenessData,
          
      },
  };

const server = new ApolloServer({
    typeDefs,
    resolvers,
});


server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});




