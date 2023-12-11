import React, {useState} from 'react';
import { View, TextInput, Text } from 'react-native';
import { Card, Button } from 'react-native-paper';
import Peticiones from '../Library/Peticiones';

const Target = ({ usuario, recargarUsuarios }) => {

    const [editing, setEditing] = useState(false);
    const [editedData, setEditedData] = useState({});

  const handleEliminar = async () => {
    try {
      const response = await Peticiones.eliminarUsuario(usuario.id);
      console.log('Respuesta del servidor al eliminar:', response);
      recargarUsuarios(); // Recarga la lista de usuarios
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
    <Card style={{margin: 10, backgroundColor: "#E3F7FF"}}>
      <Card.Title title={usuario.username} subtitle={usuario.email} />
      <Card.Content>
        <Text>Role: {usuario.role}</Text>
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
      </Card.Content>
      <Card.Actions>
        <Button buttonColor="red" textColor='white' onPress={handleEliminar}>{"Eliminar"}</Button>
        <Button buttonColor="#007bff" onPress={handleEditar}>{editing ? 'Guardar' : 'Editar'}</Button>
      </Card.Actions>
    </Card>
  );
};

export default Target;
