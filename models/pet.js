'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.pet.belongsTo(models.user)
      models.pet.belongsToMany(models.toy, { through: "pets_toys" })
    }
  };
  pet.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pet',
  });
  return pet;
};