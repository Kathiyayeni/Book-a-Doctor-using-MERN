const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://gowthamchandranj:mongodbpass@cluster0.4lckv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connection is successful");
});

connection.on("error", (error) => {
  console.log("Error in MongoDB connection", error);
});

module.exports = mongoose;
