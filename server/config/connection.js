const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongo:AHRb6E98BSKBypwA6sL3@containers-us-west-75.railway.app:6652",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/registryDB",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

module.exports = mongoose.connection;
