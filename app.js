const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const postsRoute = require('./routers/posts');

const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: 'GET,POST,PATCH,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));

//  body-parser para analisar requisições JSON
app.use(bodyParser.json());

//  rota de posts
app.use("/posts", postsRoute);

module.exports = app;
