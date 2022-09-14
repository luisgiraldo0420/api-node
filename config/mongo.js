const mongoose = require("mongoose");

const dbConnectMongo = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err, res)=>{
        if(!err){
            console.log('***************Conexión establecida correctamente con mongodb*******************');
        }else{
            console.log('***************Ups... error al intentar conectarse*******************');
        }
    })
}

module.exports = dbConnectMongo;
