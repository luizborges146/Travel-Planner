const Traveller = require('./Traveller');
const Trip = require('./Trip');
const Location = require('./Location');

Traveller.hasOne(Location, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});


Location.belongsTo(Traveller, {
  foreignKey: 'traveller_id',
});


// A reader can have many books
Traveller.hasMany(Trip, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});

// A book belongs to a single reader
Trip.belongsTo(Traveller, {
  foreignKey: 'traveller_id',
});

module.exports = { Traveller, Trip, Location };
