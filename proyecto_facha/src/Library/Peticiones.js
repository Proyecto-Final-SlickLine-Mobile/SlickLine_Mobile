
const Peticiones = {};

Peticiones.register = async (username, password, email, role, registradoPor) => {
  try {
    const response = await fetch('http://192.168.0.104:3000/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
        role,
        registradoPor, // Agrega el campo registradoPor a la solicitud
      }),
    });
    const data = await response.json();
    console.log('Respuesta del servidor al registrar:', data);
    return data;
  } catch (error) {
    console.error('Error al registrar:', error);
  }
};

Peticiones.login = async (username, password) => {
  try {
    const response = await fetch('http://192.168.0.104:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    console.log('Respuesta del servidor al iniciar sesión:', data);
    return data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
  }
};

Peticiones.getUsuariosPorSuperAdmin = async (registradoPor) => {
  try {
    const response = await fetch(`http://192.168.0.104:3000/usuariosPorSuperAdmin/${registradoPor}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('Respuesta del servidor al obtener usuarios por super admin:', data);
    return data;
  } catch (error) {
    console.error('Error al obtener usuarios por super admin:', error);
  }
};

Peticiones.eliminarUsuario = async (id) => {
  try {
    const response = await fetch(`http://192.168.0.104:3000/usuarios/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('Respuesta del servidor al eliminar usuario:', data);
    return data;
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
  }
};

Peticiones.editarUsuario = async (id, username, password, email, role) => {
  try {
    const response = await fetch(`http://192.168.0.104:3000/usuarios/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
        role,
      }),
    });
    const data = await response.json();
    console.log('Respuesta del servidor al editar usuario:', data);
    return data;
  } catch (error) {
    console.error('Error al editar usuario:', error);
  }
};


export default Peticiones;



/*import axios from "axios";

const Peticiones = {}

Peticiones.register = async ( username, password, email, role) => {

    try {
      const response = await axios.post('http://localhost:3000/registro', {
        username,
        password,
        email,
        role
        // Puedes agregar más datos como email, role, etc., dependiendo de lo que requiera tu backend
      });
      console.log('Respuesta del servidor al registrar:', response);
      return response

    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  Peticiones.login = async (username, password) => {

    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });
      console.log('Respuesta del servidor al iniciar sesión:');
      return response
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  export default Peticiones*/