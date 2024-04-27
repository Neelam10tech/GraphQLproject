
const db = require('../../../models');
const User = db.userlist;
const {GraphQLList, GraphQLInt} = require('graphql');
const UserType = require('../typeDefs/UserType')


// const UserType = require('../../Schema/typeDefs/UserType')

module.exports.USER_LIST = {
    type: new GraphQLList(UserType),
    resolve: async(parent, args,context)=> {
      
        let mydata = await context();
        console.log("mydata.host",mydata.host)
       let { dbConfig} = parent
        let data = dbConfig.userlist.findAll();
        console.log("parent",data)
        return data;
    }
}
module.exports.USER_LIST2 = {
    type: new GraphQLList(UserType),
    resolve: async(parent, args,context)=> {
        console.log(context)
        let mydata = context();
        console.log(mydata.host)
       let { dbConfig} = parent
        let data = dbConfig.userlist.findAll();
        return data;
    }
}

module.exports.USER_DETAILS = {
    type: new GraphQLList(UserType),
    args: { id: { type: GraphQLInt } },
    resolve: async (parent, args) => {
        console.log("args", args);
        let data = await User.findAll({ where: { id: args.id } });
        return data;
    }
}

