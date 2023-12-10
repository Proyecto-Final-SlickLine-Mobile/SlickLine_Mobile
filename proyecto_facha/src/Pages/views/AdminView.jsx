import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { ButtonNavigation } from '../../Components/ButtonNavigation';
import LogoutButton from "../../Components/LogoutButton";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AdminView() {
  const { user } = useAuth();

  return (
    <View style={SuAd.container}>
      <Text style={SuAd.welcomeText}>Hola {user.username}, bienvenido</Text>
      <ButtonNavigation icon={<Icon name="upload" size={30} color="#1c5ba7" />} titulo={"carga de archivos"} nav={"FileUploader"}/>
      <ButtonNavigation icon={<Icon name="pencil" size={30} color="#1c5ba7" />} titulo={"carga de datos manual"} nav={"Carga de Datos"}/>
      <ButtonNavigation icon={<Icon name="list" size={30} color="#1c5ba7" />} titulo={"Lista de operaciones"} nav={"JobsList"}/>
      
      <View style={{flex: 1 ,justifyContent: 'flex-end'}}>
        <LogoutButton></LogoutButton>
      </View>
    </View>
  );
}

const SuAd = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding: 20,
  },
  welcomeText: {
      fontSize: 20,
      textAlign: 'center',
      margin: 1,
      marginBottom: 60
  }
});