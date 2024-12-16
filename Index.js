const express = require('express');
const app = express();
const route = require('./routes'); 
const bodyParser = require('body-parser');
const db = require('./dbconnection'); 
const cors = require('cors');


app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log("Backend called");
app.use('/', route); 

app.listen(4000, () => {
    console.log("Server created successfully on port 4000");
});
