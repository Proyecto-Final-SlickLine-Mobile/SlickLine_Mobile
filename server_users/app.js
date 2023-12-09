const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware para parsear el body de las peticiones
app.use(express.json());
app.use(cors());
// Verifica si el archivo usuarios.json existe y tiene contenido
const path = 'usuarios.json';

fs.stat(path, (err, stats) => {
  if (err) {
    console.error('Error al verificar el archivo usuarios.json:', err);
    return;
  }

  if (stats.size === 0) {
    console.log('El archivo usuarios.json está vacío.');
    // Si el archivo está vacío, inicialízalo con un array vacío
    fs.writeFile(path, '[]', (err) => {
      if (err) {
        console.error('Error al inicializar el archivo usuarios.json:', err);
        return;
      }
      console.log('Archivo usuarios.json inicializado correctamente.');
    });
  } else {
    console.log('El archivo usuarios.json ya existe.');
  }
});

// Ruta de registro de usuarios
app.post('/registro', (req, res) => {
  const { username, password, email, role } = req.body;

  // Lee el archivo de usuarios
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo usuarios.json:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }

    const usuarios = JSON.parse(data);

    // Verifica si el usuario ya está registrado
    const usuarioExistente = usuarios.find((user) => user.username === username);
    if (usuarioExistente) {
      return res.status(400).json({ error: 'El usuario ya está registrado' });
    }

    // Agrega el nuevo usuario al array
    usuarios.push({ username, password, email, role });

    // Escribe el array actualizado en el archivo usuarios.json
    fs.writeFile(path, JSON.stringify(usuarios, null, 2), (err) => {
      if (err) {
        console.error('Error al escribir en el archivo usuarios.json:', err);
        return res.status(500).json({ error: 'Error interno del servidor' });
      }
      res.status(200).json({ message: 'Usuario registrado correctamente' });
    });
  });
});

// Ruta de login de usuarios
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Lee el archivo de usuarios
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo usuarios.json:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }

    const usuarios = JSON.parse(data);

    // Verifica si las credenciales son válidas
    const usuarioValido = usuarios.find((user) => user.username === username && user.password === password);
    if (!usuarioValido) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    res.status(200).json({ message: 'Inicio de sesión exitoso', usuario: usuarioValido });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
