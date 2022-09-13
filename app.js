require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect = require('./config/mongo');
const openApiConfigration = require("./docs/swagger")
const swaggerUI = require("swagger-ui-express")


app.use(cors());

app.use(express.json());

app.use(express.static("storage/img-categories"));
app.use(express.static("storage/img-products"));


const port = process.env.PORT || 8000;

/**
 * Definir ruta de documentación
 */

 app.use('/documentation',
 swaggerUI.serve, 
 swaggerUI.setup(openApiConfigration))


/**
 * Rutas
 */
app.use("/api", require("./routes"))

app.listen (port, () => {
    console.log(`Corriendo en http://localhost:${port}`);
})

dbConnect();