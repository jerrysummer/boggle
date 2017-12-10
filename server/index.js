const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(`${__dirname}/../react-client/dist`));

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});

