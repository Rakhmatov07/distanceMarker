import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/index.js"; 

class User extends Model{};

User.init({
    userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'users' // We need to choose the model name
  });
  
  // the defined model is the class itself
  export default User;
