const mongoose = require('mongoose');
const mongooseDelete = require("mongoose-delete");


const UserSheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        username: {
            type: String
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        },
        role: {
            type:["user", "admin"],
            default: "user"
        },
        status: {
            type:["true", "false"],
            default: "true"
        }
    },
    {
        timestamps: true,  //fecha de registro y de actualizacion 
        versionKey: false
    }
)
UserSheme.plugin(mongooseDelete, {overrideMethods: "all"});

module.exports = mongoose.model("users", UserSheme);