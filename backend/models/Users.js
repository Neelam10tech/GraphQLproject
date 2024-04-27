

module.exports = (sequelize,DataTypes)=>{
    const Users = sequelize.define('userslist',{
        name:DataTypes.STRING,
        email:DataTypes.STRING,
        gender:DataTypes.STRING,
        status:DataTypes.STRING
    },{
        createdAt :'create_at',
        updateAt:'modefied_at'
    })
    return Users;
}