require("dotenv").config();
module.exports = {
  mongoURI: "mongodb://localhost:27017/mystore",
  SECRET: process.env.APP_SECRET,
};
