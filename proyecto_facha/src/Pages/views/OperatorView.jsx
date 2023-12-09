import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { ButtonNavigation } from '../../Components/ButtonNavigation';
import LogoutButton from "../../Components/LogoutButton";

export default function OperadorView() {
  const { user } = useAuth();

  return (
    <View>
      <Text>Hola Operador {user.username}, bienvenido</Text>
      <ButtonNavigation titulo={"Lista de operaciones"} nav={"JobsList"}/>
      <LogoutButton></LogoutButton>
    </View>
  );
}