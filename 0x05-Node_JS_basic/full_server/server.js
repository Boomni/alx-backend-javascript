const express = require('express');
const app = express();
const port = 1245;
const routes = require('./routes');

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

export default app;
