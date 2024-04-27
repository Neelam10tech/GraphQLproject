
const db = require('../../../models');
const User = db.userlist;
const { GraphQLString, GraphQLInt,} = require('graphql');
const UserType = require('../typeDefs/UserType')
const StatusType = require('../typeDefs/StatusType')

// const UserType = require('../../Schema/typeDefs/UserType')

module.exports.USER_Add = {
    type: UserType,
    args:{
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
    },
    resolve(parent, args) {
       User.create({
        name:args.name,
        email:args.email,
        gender:args.gender
       })
        return args;
    }
}


module.exports.USER_UPDATE = {
    type: StatusType,
    args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
    },
    resolve: async (parent, args) => {
        // Retrieve the user from the database
        const user = await User.findByPk(args.id);

        // If user not found, return null or throw an error
        if (!user) {
            // Handle the case where the user with the provided id does not exist
            throw new Error('User not found');
        }

        // Update user properties if provided
        if (args.name) {
            user.name = args.name;
        }
        if (args.email) {
            user.email = args.email;
        }
        if (args.gender) {
            user.gender = args.gender;
        }

        // Save the updated user to the database
        await user.save();

        // Return the updated user
        return {
            success:true,message:"update",error:"error"
        }
    }
}



module.exports.DELETE_USER = {
    type: StatusType,
    args:{
        id: { type: GraphQLInt },
    },
    resolve: async(parent, args) =>{
       User.destroy({
        where:{
            id:args.id
        }
       })
       return {
        success:true,message:"Delete",error:"error"
    }
    }
}

