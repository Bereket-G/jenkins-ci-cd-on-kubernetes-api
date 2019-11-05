/**
 * Load Module Dependencies
 */
const express       = require("express");
const responseTime  = require("response-time");
const bodyParser    = require("body-parser");
const mongoose      = require("mongoose");
const debug         = console.log;

const logger = require("./lib/logger");
const config = require("./config");
const router = require("./routes");

const validator    = require('express-validator');

mongoose.connect(config.DB_URL);

mongoose.connection.on("connected", () =>{
  debug("connected to mongodb successfully")
});

mongoose.connection.on("", (err)=>{
  debug(err.message);

  process.exit(1);
});


let app = express();

app.use(responseTime());

app.use('/' , function (req, res){
    res.send(200);
});

//~ Set Validator ~//
app.use(validator());

app.use(logger({logging: false}));

app.use(bodyParser.urlencoded({
    extended: true
}));

router(app);


app.listen(config.HTTP_PORT, ()=>{
  debug(`Web Server Running on port ${config.HTTP_PORT}`)
});