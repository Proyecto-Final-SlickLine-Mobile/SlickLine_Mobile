import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Peticiones from '../../Library/Peticiones';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';


export default function RegistroView() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState('operador'); // Valor predeterminado
  const [serverResponse, setServerResponse] = useState('');
  const navigation = useNavigation();

  const {user} = useAuth();

  const handleRegistro = async () => {
    // Lógica para enviar los datos al servidor
    try {
      const response = await Peticiones.register(username, password, email, rol, user.id);
      // Manejar la respuesta del servidor
      console.log('Respuesta del servidor:', response);
      setServerResponse('Usuario registrado correctamente');
      setTimeout(() => {
        setServerResponse('');
        navigation.navigate('listaUsuarios'); // Cambia 'ListaUsuarios' por el nombre correcto de tu página de lista de usuarios
      }, 5000); // Espera 5 segundos antes de redirigir
    } catch (error) {
      console.error('Error al registrar:', error);
      setServerResponse('Error al registrar');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry // Para ocultar la contraseña
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address" // Teclado específico para emails
      />
      <Text style={styles.label}>Rol:</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={rol === 'operador' ? styles.buttonSelected : styles.button} onPress={() => setRol('operador')}>
          <Text style={styles.buttonText}>Operador</Text>
        </TouchableOpacity>
        <TouchableOpacity style={rol === 'admin' ? styles.buttonSelected : styles.button} onPress={() => setRol('admin')}>
          <Text style={styles.buttonText}>Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={rol === 'super-admin' ? styles.buttonSelected : styles.button} onPress={() => setRol('super-admin')}>
          <Text style={styles.buttonText}>Super-Admin</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegistro}>
        <Text style={styles.registerButtonText}>Registrar</Text>
      </TouchableOpacity>

      {serverResponse ? <Text style={styles.serverResponse}>{serverResponse}</Text> : null}
      <Text style={styles.title}>Registrar Usuario</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 5,
  },
  buttonSelected: {
    flex: 1,
    padding: 10,
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#007BFF',
    marginRight: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  registerButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  registerButtonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
