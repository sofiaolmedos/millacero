const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./models/index');
const Community = require('./models/Community');

const app = express();
const PORT = process.env.PORT;

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.use(express.json());

connectDB();

app.post('/community', async (req, res) => {
  try {
    const communityData = req.body;
    const newCommunity = await Community.create(communityData);
        
    res.json({ 
      success: true, 
      message: 'Datos de comunidad guardados correctamente',
      data: newCommunity.toJSON(),
    });
    
  } catch (error) {
    console.error('Error:', error);
    
    if (error.name === 'SequelizeValidationError') {
      const validationErrors = error.errors.map(err => ({
        field: err.path,
        message: err.message
      }));
      
      return res.status(400).json({ 
        success: false, 
        error: 'Error de validación',
        details: validationErrors
      });
    }
    
    res.status(500).json({ 
      success: false, 
      error: 'Error al procesar los datos' 
    });
  }
});

app.get('/community/last', async (req, res) => {
  try {
    const lastCommunity = await Community.findOne({
      order: [['createdAt', 'DESC']] 
    });
    
    if (!lastCommunity) {
      return res.status(404).json({
        success: false,
        error: 'No se encontraron registros'
      });
    }    
    res.json({
      success: true,
      data: lastCommunity.toJSON(),
      message: 'Último registro obtenido correctamente'
    });
    
  } catch (error) {
    console.error('Error al obtener el último registro:', error);
    res.status(500).json({
      success: false,
      error: 'Error al obtener el último registro'
    });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
