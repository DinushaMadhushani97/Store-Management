const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const storeRoutes = require('./routes/stores');

//app middleware
app.use(bodyParser.json());

app.use(cors());
//route middleware
app.use(storeRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://B:1234@cluster0.flxpsuz.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');

})
.catch((err) => console.log('DB connection error',err));


app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);    
});