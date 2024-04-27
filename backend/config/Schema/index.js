

const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graphql;



const {USER_LIST, USER_LIST2, USER_DETAILS} = require('./Queries/User')

const {USER_Add,USER_UPDATE,DELETE_USER} = require('./Mutations/User');


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        userList: USER_LIST,
        codeimprove: USER_LIST2,
        userDetail: USER_DETAILS
    }
});

const Mutation = new GraphQLObjectType({
    name: 'mutation',
    fields: {
       createUser:USER_Add,
       userUpdate:USER_UPDATE,
       deleteUser:DELETE_USER
    }
});

module.exports = new GraphQLSchema({ query: RootQuery ,mutation:Mutation});
