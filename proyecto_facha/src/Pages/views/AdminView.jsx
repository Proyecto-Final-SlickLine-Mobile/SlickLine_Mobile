import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { ButtonNavigation } from '../../Components/ButtonNavigation';
import LogoutButton from "../../Components/LogoutButton";

export default function AdminView() {
  const { user } = useAuth();

  return (
    <View>
      <Text>Hola {user.username} bienvenido</Text>
      <ButtonNavigation titulo={"carga de archivos"} nav={"FileUploader"}/>
      <ButtonNavigation titulo={"carga de datos manual"} nav={"Carga de Datos"}/>
      <ButtonNavigation titulo={"Lista de operaciones"} nav={"JobsList"}/>
      <LogoutButton></LogoutButton>
    </View>
  );
}
