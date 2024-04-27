const express = require('express');
// const User = db.userlist;
const app = express();
const PORT = 3000;
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
app.use(cors());

const schema = require('./config/Schema/index');


var db = require('./models');


require('./models');
// app.use(express.json());

// Route handler for the root URL ("/")
// app.get('/', (req, res) => {
//     res.send('Welcome to my GraphQL API!');
// });

var root ={
    ip:'191.61.1.112',
    dbConfig:db
}

const context = async req=>{
    console.log(req.headers.host)
    const host = req.headers.host;
    const token = 'sssssss'
    return {host,token}
}

// GraphQL route handler
app.use('/graphql', 
// graphqlHTTP({
//     schema,
//     rootValue:root,
//     graphiql: true,
//     context :()=>context(req)

graphqlHTTP(async req =>({
    schema,
    rootValue:root,
    graphiql: true,
    context :()=>context(req)
})));

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});
