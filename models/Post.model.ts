const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("myblog", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const Posts = sequelize.define("Posts", {
  id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

export { Posts };
