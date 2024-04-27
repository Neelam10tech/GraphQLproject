const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        gender: { type: GraphQLString },
    })
});

// const UserType = require('./')
const db = require('./models');
const User = db.userlist

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        userList: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                let data = User.findAll()
                return data;
            }
        }
    }
});

module.exports = new GraphQLSchema({ query: RootQuery });
