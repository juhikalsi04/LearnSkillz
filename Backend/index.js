const express = require("express");
const app = express();
const port = 5000;
const connectToMongo = require('./db');
const fetchUser = require("./middleware/fetchUser");
connectToMongo();

app.use(express.json())

app.use('/api/discussion/post', require('./routes/post'))
app.use('/api/discussion/post/user', require('./routes/user'))
app.use('/api/discussion/auth', require('./routes/auth'))
app.use('/api/discussion/reply', require('./routes/replies'))
app.use('/api/discussion/tag', require('./routes/tags'))
app.use('/api/onlinetest/sampletest', require('./routes/samplepaper'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
