import React, { useContext, useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { AuthContext } from '../Context/AuthContext'; // Asegúrate de importar AuthContext

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(AuthContext); // Utiliza el AuthContext

  const simulatedUsers = [
    {
      email: 'operario@ejemplo.com',
      password: '12345678',
      role: 'operario',
    },
    {
      email: 'admin@ejemplo.com',
      password: '12345678',
      role: 'admin',
    },
    {
      email: 'superadmin@ejemplo.com',
      password: '12345678',
      role: 'superadmin',
    },
  ];
  

  const signIn = () => {
    const user = simulatedUsers.find(
      user => user.email === email && user.password === password
    );
  
    if (user) {
      console.log('Inicio de sesión exitoso', user);
      setUser(user); // Guarda el usuario simulado en el contexto
      // Aquí puedes redirigir al usuario a la página principal
    } else {
      console.error('Error durante el inicio de sesión', 'Credenciales incorrectas');
    }
  };
  

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Iniciar sesión" onPress={signIn} />
    </View>
  );
}
