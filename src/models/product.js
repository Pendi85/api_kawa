'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    description: DataTypes.STRING,
    color: DataTypes.STRING,
    createAt: DataTypes.STRING,
    modelRA: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: false
  });
  return Product;
};