
///
// este archivo solo fue para poder agregar las id a los usuarios que ya existian 
////
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const path = 'usuarios.json';

// Lee el archivo de usuarios
fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo usuarios.json:', err);
    return;
  }

  const usuarios = JSON.parse(data);

  // Recorre cada usuario y agrega ID y registradoPor si no existen
  usuarios.forEach((usuario, index) => {
    if (!usuario.id) {
      usuarios[index].id = uuidv4();
    }
    if (!usuario.registradoPor) {
      usuarios[index].registradoPor = 'admin'; // Aquí puedes asignar el rol de quien lo registró
    }
  });

  // Escribe el array actualizado en el archivo usuarios.json
  fs.writeFile(path, JSON.stringify(usuarios, null, 2), (err) => {
    if (err) {
      console.error('Error al escribir en el archivo usuarios.json:', err);
      return;
    }
    console.log('Usuarios actualizados correctamente.');
  });
});
