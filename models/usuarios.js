"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuarios.init(
    {
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      senha:{
        type: DataTypes.STRING,
        allowNull: true,
        set(value) {
          const hash = bcrypt.hashSync(value, 10);
          this.setDataValue('senha', hash);
        },
      },
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "usuarios",
      instanceMethods: {
        generateHash(senha) {
            return bcrypt.hash(senha, bcrypt.genSaltSync(8));
        },
        validPassword(senha) {
            return bcrypt.compare(senha, this.senha);
        }
      }
      
    }
  );

  return usuarios;
};
