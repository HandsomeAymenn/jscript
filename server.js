const { json } = require("express");
const express = require("express");
const app = express();
 
app.use(express.json()); // this middleware is needed to parse request body as JSON


app.get("/home", (req, res) => {
  const studentId = req.query.id + req.query.name;
  // do something with studentId
  res.send("student with id " + studentId + " retrieved successfully");
});

app.post("/addstudents", (req, res) => {
  const studentData = req.body;
  // do something with studentData
  res.send("student created successfully" + req.body);
});
app.listen(3000, () => console.log("Server running on port 3000"));