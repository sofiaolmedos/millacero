// Middleware para manejo de errores
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.stack);
  
  // Error por defecto
  let statusCode = 500;
  let message = 'Error interno del servidor';
  
  // Personalizar errores según el tipo
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Error de validación';
  } else if (err.name === 'UnauthorizedError') {
    statusCode = 401;
    message = 'No autorizado';
  } else if (err.name === 'NotFoundError') {
    statusCode = 404;
    message = 'Recurso no encontrado';
  }
  
  res.status(statusCode).json({
    success: false,
    error: message,
    message: process.env.NODE_ENV === 'development' ? err.message : 'Error interno del servidor',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

module.exports = errorHandler;
