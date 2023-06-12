const { Schema, model } = require("mongoose");
const moment = require("moment"); 

const commentSchema = new Schema = (
    {
        comment: {
            type: String,
            required: true,
            minlength: 1
        },
        username: {
            type: String,
            required: true
        },
        created: {
            type: Date,
            default: Date.now,
            get: formatDate
        },
        toJSON: {
            getters: true,
        },
    })

    const Comment = model("comment", commentSchema);

    module.exports = Comment; 



