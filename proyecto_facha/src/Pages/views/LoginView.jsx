import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../../contexts/AuthContext';
import { styles } from '../../Styles/Styles';
import pozoimg from '../../../assets/pozo.jpg'
import logo from '../../../assets/app_media/refsaHidro_logo.png'

export default function LoginView() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { acces, user, login } = useAuth();

  const navigation = useNavigation();

  const handleLogin = async() => {

        await login(username, password)
        if ( user ) {
          // Autenticación exitosa, navega a la pantalla 'Admin'
          user.role == "admin" && navigation.navigate("Admin")
        }else if(user ){
          //Autenticacion Exitosa y es operador
          user.role == "operador" && navigation.navigate("operador")
        }else if(user ){
          //Autenticacion Exitosa y es Super Admin
          user.role == "super-admin" && navigation.navigate("superAdmin")
        } else if (user == null && acces) {
          // Autenticación fallida, muestra un mensaje de error
          alert('Nombre de usuario o contraseña incorrectos');
        }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={pozoimg} resizeMode="cover" style={styles.imageBack}>
        <View style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10}}>

        
          <View style={{...styles.logoContainer, alignItems: 'center'}}>
            {/* Imagen con width y height al 100% del contenedor y resizeMode: 'contain' */}
            <Image
              style={{ width: '80%', height: '100%', resizeMode: 'contain' }}
              source={logo}
            />
          </View>
          <Text style={{alignSelf: 'center'}}>Iniciar Sesión</Text>
          <TextInput
            placeholder="  Nombre de Usuario"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={{backgroundColor: 'white', margin: 10, borderRadius: 8}}
          />
          <TextInput
            placeholder="  Contraseña"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{backgroundColor: 'white', margin: 10, borderRadius: 8}}
          />
          <View>
          <TouchableOpacity style={{marginTop: 50, backgroundColor: "#007bff", width: '50%', alignSelf: 'center', justifyContent: "center", borderRadius: 9}} onPress={handleLogin}>
            <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>Iniciar Sesión</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
