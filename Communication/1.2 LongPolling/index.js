const express = require("express");
const app = express();

let data = "Initial Data";
const waitinclients = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/getData", (req, res) => {
  // if last id is not same is previous then send the data
  if (data == !req.query.lastdata) {
    res.send({
      data
    });
  } else {
    waitinclients.push(res);
  }
});

// Use post/put to update
app.get("/updateData", (req, res) => {
  data = req.query.data;
  while (waitinclients.length > 0) {
    const client = waitinclients.pop();
    client.json({ data });
  }

  res.send({success: "Data updated successfully"})
});

const port = process.env.PORT || 5011;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
