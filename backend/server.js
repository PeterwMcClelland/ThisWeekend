const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

//initialize middleware here!
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));


//run server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));