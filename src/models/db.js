const Sequelize = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(
process.env.DB, process.env.USER, process.env.PASS, {
host: "localhost",
dialect: "mysql"
});

console.log(process.env.DB)
module.exports = {
  Sequelize : Sequelize,
  sequelize: sequelize
}
