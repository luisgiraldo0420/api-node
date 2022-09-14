const mongoose = require('mongoose');
const mongooseDelete = require("mongoose-delete");



const PositionScheme = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true
        },
        status: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,  //fecha de registro y de actualizacion 
        versionKey: false
    }
)
PositionScheme.plugin(mongooseDelete, {overrideMethods: "all"});
module.exports = mongoose.model("positions", PositionScheme);