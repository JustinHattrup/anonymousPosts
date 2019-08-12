const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');
const apiRoute = require('./routes/api');
const path = require('path');

require('dotenv/config');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', apiRoute);
app.use(
  '/graphql',
  expressGraphQL({
    schema: schema,
    graphiql: true
  })
);

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, autoIndex: false },
  () => {
    console.log('connected to db!');
  }
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
