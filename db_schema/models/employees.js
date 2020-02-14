const Sequelize = require("sequelize");
const Employees = function(sequelize) {
  return sequelize.define(
    "emp",
    {
      empno: {
        type: Sequelize.DECIMAL,
        primaryKey: true
      },
      ename: {
        type: Sequelize.STRING,
        allowNull: false
      },
      job: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mgr: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      hiredate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      sal: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      comm: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      deptno: {
        type: Sequelize.DECIMAL,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      tableName: "emp",
      timestamps: false,
      underscored: true
    }
  );
};

module.exports = Employees;
