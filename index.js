const express = require("express");
const app = express();
const port = 3000;

const data = '';

app.get("/testnets", (req, res) => {
  res.send({
    code: 200,
    data: data,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
