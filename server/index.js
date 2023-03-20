const express = require('express');

const colors=require('colors');

require('dotenv').config();

const {graphqlHTTP} = require('express-graphql');

const schema = require('./schema/schema');
const connectDB =require('./config/db');

const port= process.env.PORT || 5000

//connect to database
connectDB();

const app = express();


app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: global,
    graphiql: process.env.Node_ENV === "development",
  }));

app.listen(port, console.log(`Server listening on ${port}`))