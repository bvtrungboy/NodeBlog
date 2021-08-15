const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://Admin:admin@boocluster.sjiij.mongodb.net/myFirstDatabase', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connect successfully");
    } catch (error) {
        console.log("Connect error");
    }
}

module.exports = { connect };