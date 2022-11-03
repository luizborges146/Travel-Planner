const {Model, DataTypes} = require ('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {}

Traveller.init (
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        name: {
            type:DataTypes.STRING,
            allowNull:false,
        },
        email: {
            type:DataTypes.STRING,
            allowNull:false,
        },
        sequelize,
        timesmpas:false,
        freezeTableName:true,
        undescored:true,
        modelName:'traveller',
    },
);

module.exports = Traveller;
