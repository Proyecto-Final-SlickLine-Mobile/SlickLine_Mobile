import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Peticiones from '../Library/Peticiones';

const Target = ({ usuario }) => {

    const [editing, setEditing] = useState(false);
    const [editedData, setEditedData] = useState({});

  const handleEliminar = async () => {
    try {
      const response = await Peticiones.eliminarUsuario(usuario.id);
      console.log('Respuesta del servidor al eliminar:', response);
      // Lógica adicional después de eliminar, si es necesario
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  };

  const handleEditar = async () => {
    if (editing) {
      try {
        const { username, password, email, role } = editedData;
        const response = await Peticiones.editarUsuario(usuario.id, username, password, email, role);
        console.log('Respuesta del servidor al editar:', response);
        // Lógica adicional después de editar, si es necesario
        setEditing(false); // Desactiva el modo de edición después de guardar los cambios
      } catch (error) {
        console.error('Error al editar:', error);
      }
    } else {
      // Habilita el modo de edición al presionar el botón "Editar"
      setEditedData({
        username: usuario.username,
        password: usuario.password,
        email: usuario.email,
        role: usuario.role,
      });
      setEditing(true);
    }
  };

  const handleInputChange = (field, value) => {
    setEditedData({ ...editedData, [field]: value });
  };

  return (
    <View>
      <Text>Username: {usuario.username}</Text>
      <Text>Email: {usuario.email}</Text>
      <Text>Role: {usuario.role}</Text>
      <TouchableOpacity onPress={handleEliminar}>
        <Text>Eliminar</Text>
      </TouchableOpacity>
      {editing ? (
        <View>
          <TextInput
            value={editedData.username}
            onChangeText={(text) => handleInputChange('username', text)}
            placeholder="Nuevo Username"
          />
          <TextInput
            value={editedData.password}
            onChangeText={(text) => handleInputChange('password', text)}
            placeholder="Nuevo Password"
            secureTextEntry
          />
          <TextInput
            value={editedData.email}
            onChangeText={(text) => handleInputChange('email', text)}
            placeholder="Nuevo Email"
            keyboardType="email-address"
          />
          <TextInput
            value={editedData.role}
            onChangeText={(text) => handleInputChange('role', text)}
            placeholder="Nuevo Role"
          />
        </View>
      ) : null}
      <TouchableOpacity onPress={handleEditar}>
        <Text>{editing ? 'Guardar' : 'Editar'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Target;
