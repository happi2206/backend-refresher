const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorhandler');
const app = express();
const connectDb = require('./config/dbConnection');
const port = process.env.PORT || 4000;

connectDb();
// middle ware
app.use(express.json());

app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
