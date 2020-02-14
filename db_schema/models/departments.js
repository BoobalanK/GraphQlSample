const Sequelize = require("sequelize");
const Departments = function(sequelize) {
  return sequelize.define(
    "dept",
    {
      deptno: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        primaryKey: true
      },
      dname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      loc: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      tableName: "dept",
      timestamps: false,
      underscored: true
    }
  );
};

module.exports = Departments;
