import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import Peticiones from '../Library/Peticiones';
import { useAuth } from '../contexts/AuthContext';
import Target from '../Components/Target';

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const {user} = useAuth()

  const obtenerUsuarios = async () => {
    try {
      const registradoPor = user.id; // ID del super admin
      const data = await Peticiones.getUsuariosPorSuperAdmin(registradoPor);
      setUsuarios(data.usuariosRegistrados); // Suponiendo que la respuesta contiene un campo "usuariosRegistrados"
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const renderUsuario = ({ item }) => <Target usuario={item} recargarUsuarios={obtenerUsuarios} />;

  return (
    <FlatList
      data={usuarios}
      renderItem={renderUsuario}
      keyExtractor={(item) => item.id.toString()} // Puedes utilizar el ID del usuario si está disponible
      ListHeaderComponent={<Text style={{fontSize:25}}>Lista de Usuarios:</Text>} // Encabezado de la lista
    />
  );
};

export default ListaUsuarios;
