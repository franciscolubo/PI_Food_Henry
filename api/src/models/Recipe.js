const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    score: {
      type: DataTypes.STRING,
      validate: {
        min: 0,
        max:100
      }
    },
    healthScore: {
      type: DataTypes.STRING,
      validate: {
        min: 1,
        max:100
      }
    },
    steps: {
      type: DataTypes.JSON
    },
    image: {
      type: DataTypes.TEXT
    },
    isDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
};