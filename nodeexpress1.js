const dbc= require('./NodeMongoose2');
const { json } = require('express');
const express = require('express');
const app = express();
//comment the 1 line
//comement the 21 line
 
app.use(express.json()); // this middleware is needed to parse request body as JSON

 
app.get('/home', (req, res) => {
    const studentId = req.query.id;
    // do something with studentId
    res.send('student with id ' + studentId + ' retrieved successfully');
  });
 
app.post('/addstudents', (req, res) => {
  const studentData = req.body;
  console.log(JSON.stringify(req.body.name));
  // do something with studentData
 // res.send('student created successfully' +JSON.stringify(req.body));
 //call your db module
 //dbconnect
 dbc.dbconnect(req.body,"create");
 res.send('student Object sent successfully to node js' + req.body.name);
});

 
app.post('/updatestudents', (req, res) => {
  const studentData = req.body;
 
 dbc.dbconnect(req.body,"update");
 res.send('student Object sent successfully to node js' + req.body.name);
});

 
//use applicaiton/json in body content type when testing from advanced rest client
 
app.listen(3000, () => console.log('Server running on port 3000'));