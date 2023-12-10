const fs = require('fs');
const path = 'usuarios.json'; // Asegúrate de que la variable path esté definida

const obtenerUsuarioActual = (id) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // Manejo de errores...
        console.error('Error al leer el archivo usuarios.json:', err);
        reject(err); // Rechaza la promesa en caso de error
      }
      const usuarios = JSON.parse(data);

      // Encuentra el usuario correspondiente al ID
      const usuario = usuarios.find((user) => user.id === id);
      if (usuario) {
        resolve(usuario); // Resuelve la promesa con el usuario encontrado
      } else {
        reject(new Error('Usuario no encontrado')); // Rechaza la promesa si no se encuentra el usuario
      }
    });
  });
};

module.exports = { obtenerUsuarioActual };
