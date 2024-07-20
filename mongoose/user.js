const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    createdAt: Date,
    updateAt: Date,
    bestFriend
})

module.exports = mongoose.model("user", userSchema)