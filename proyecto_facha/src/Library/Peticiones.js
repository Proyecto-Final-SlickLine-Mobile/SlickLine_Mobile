
const Peticiones = {};

Peticiones.register = async (username, password, email, role) => {
  try {
    const response = await fetch('http://192.168.56.1:3000/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
        role,
        // Puedes agregar más datos como email, role, etc., dependiendo de lo que requiera tu backend
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
    const response = await fetch('http://192.168.56.1:3000/login', {
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