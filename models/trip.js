const {Model, DataTypes} = require ('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init (
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        trip_budget: {
            type:DataTypes.DECIMAL,
            allowNull:false,
        },
        traveller_amount: {
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        location_id: {
            type:DataTypes.INTEGER,
            referecens: {
                model:'traveller',
                key:'id',
            }
        },
        traveller_id:{
            type:DataTypes.INTEGER,
            referecens: {
                model:'traveller',
                key:'id',
            }
        },
        sequelize,
        timesmpas:false,
        freezeTableName:true,
        undescored:true,
        modelName:'trip',
    },
);

module.exports = Trip;