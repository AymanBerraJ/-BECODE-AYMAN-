const mongoose = require("mongoose")
const User = require("./user")

mongoose.connect("mongodb://localhost/testdb")

run()

async function run() {


    const user = await User.create({name: "ayman", age: 24})
    // const user = new User({name: "ayman", age: 24})
    await user.save()
    console.log(user);
}
