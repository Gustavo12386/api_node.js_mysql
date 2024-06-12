'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    id: {
      type: DataTypes.INTEGER,     
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sistema: DataTypes.STRING,
    tipo_maquina: DataTypes.STRING,
    porta: DataTypes.STRING,
    endereco_ip: DataTypes.STRING,
    endereco_mac: DataTypes.STRING,
    fabricante: DataTypes.STRING,
    usuario: DataTypes.STRING,
    acesso: DataTypes.STRING,
    ping: DataTypes.STRING,
    rede: DataTypes.STRING,
    processador: DataTypes.STRING,
    memoria: DataTypes.STRING,
    disco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'Posts',
    timestamps: true
  });
  return Post;
};