const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction");
const moment = require("moment"); 

const thoughtsSchema = new Schema (
    {
        thought: {
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

    function formatDate(date) {
        return moment(date).format("DD/MM/YY HH:mm");
      }

    const Thought = model("thought", thoughtsSchema);

    module.exports = Thought; 



