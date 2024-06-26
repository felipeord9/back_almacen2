const { Model, DataTypes, Sequelize } = require("sequelize");

const PRODUCT_TABLE = "products";

const ProductSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  um: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  conversion: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true
  }
};

class Product extends Model {
  static associate(models) {
    //
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: "Product",
      timestamps: false,
    };
  }
}

module.exports = {
    PRODUCT_TABLE,
    ProductSchema,
    Product
}
