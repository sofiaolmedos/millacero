const { Sequelize } = require('sequelize');
const config = require('../config/database');

const env = process.env.NODE_ENV;
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging,
    pool: dbConfig.pool
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
    await sequelize.sync({ force: false }); 

  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
};

module.exports = { sequelize, connectDB };
