const { ApolloServer, gql } = require('apollo-server');
const forgivenessData = require('./forgivenessData');
const gratitudeData = require ('./gratitudeData');
const poemData = require ('./poemData');

//The Graphql Schema
const typeDefs = gql`
  type Query {
      forgivenesses: [Forgiveness]
      forgiveness(_id: ID!): Forgiveness
      gratitudes: [Gratitude]
      poems: [Poem]
  }
  type Forgiveness {
      _id: ID!
      title: String!
      content: String
  }
  type Gratitude {
      _id: ID!
      title: String
      content: String
  }
  type Poem {
    _id: ID!
    title: String
    content: String
}
  `;

  //A map of functions which return data for the schema.
  const resolvers = {
      Query: {
          forgivenesses: (dontCare,args) => forgivenessData,
          forgiveness: (_,args) => forgivenessData.find(
            (forgivenessValue) => (forgivenessValue._id === args._id)
          ),
          gratitudes: () => gratitudeData,
          poems: () => [],
          
      },
  };

const server = new ApolloServer({
    typeDefs,
    resolvers,
});


server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});




