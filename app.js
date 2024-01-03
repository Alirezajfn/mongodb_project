const express = require('express');
const postsRouter = require('./routes/posts');

const app = express();
const port = 3000;

app.use(express.json());

// Use posts routes
app.use('/posts', postsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
