const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')

dotenv.config();
//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'))


//routes
app.get("/", (req, res) => {
    res.status(200).send({
        message: "Server is running"
    })
})

const port = process.env.PORT || 8090
    //listen port
app.listen(port, () => {
    console.log(
        `server is running `.bgCyan.white
    );
});