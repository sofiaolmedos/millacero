const mysql = require('mysql2/promise');
require('dotenv').config();

async function initDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    });

    const dbName = process.env.DB_NAME
    await connection.execute(`CREATE DATABASE IF NOT EXISTS ${dbName}`);

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS ${dbName}.communities (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone INT NOT NULL,
        address TEXT NOT NULL,
        apartments INT NOT NULL,
        service VARCHAR(255) NOT NULL,
        role VARCHAR(255) NOT NULL,
        comments TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `;

    await connection.execute(createTableQuery);

    await connection.end();

  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  initDatabase();
}

module.exports = initDatabase;
