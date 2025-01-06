// models/User.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import the sequelize instance

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    timestamps: false, // If you don't want Sequelize to manage createdAt/updatedAt
  }
);

module.exports = User;
