const Sequelize = require("sequelize");
const sequelize = new Sequelize("sampleschema", "root", "RGt79`T~Zdz#9+a_", {
  host: "localhost",
  dialect: "mysql",
  logging: true,
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Api connected with mySql =>Success! ");
  })
  .catch(err => {
    console.log(err);
  });

const departments = require("../db_schema/models/departments");

const value = departments(sequelize)
  .findAll({})
  .then(result => {
    console.log("test : " + JSON.stringify(result));
  });
const value2 = sequelize
  .query("SELECT * FROM `dept`", { type: sequelize.QueryTypes.SELECT })
  .then(depts => {
    console.log("DATA2 " + JSON.stringify(depts));
  });

module.exports = sequelize;
