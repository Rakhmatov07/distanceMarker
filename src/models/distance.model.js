import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/index.js";

class Distance extends Model{};

Distance.init({
    distanceId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    from: {
        type: DataTypes.STRING,
        allowNull: false
    },
    to: {
        type: DataTypes.STRING,
        allowNull: false
    },
    length: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'userId'
        }
    }
},{
    sequelize,
    modelName: 'distances'
})

export default Distance;