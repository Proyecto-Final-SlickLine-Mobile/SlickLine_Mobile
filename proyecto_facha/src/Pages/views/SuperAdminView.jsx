import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ButtonNavigation } from '../../Components/ButtonNavigation';
import { useAuth } from '../../contexts/AuthContext';
import LogoutButton from "../../Components/LogoutButton";
import Icon from 'react-native-vector-icons/FontAwesome';

export const SuperAdminView = () => {
    const { user } = useAuth();

    return (
        <View style={SuAd.container}>
            <Text style={SuAd.welcomeText}>Hola {user.username}, bienvenido</Text>
            
                <ButtonNavigation icon={<Icon name="user-plus" size={30} color="#1c5ba7" />} titulo={"Registrar usuario"} nav={"Registro de usuarios"}/>
                <ButtonNavigation icon={<Icon name="list" size={30} color="#1c5ba7" />} titulo={"Lista de Usuarios"} nav={"listaUsuarios"}/>
                <ButtonNavigation icon={<Icon name="upload" size={30} color="#1c5ba7" />} titulo={"Carga de archivos"} nav={"FileUploader"}/>
                <ButtonNavigation icon={<Icon name="pencil" size={30} color="#1c5ba7" />} titulo={"Carga de datos manual"} nav={"Pregunta"}/>
                <ButtonNavigation icon={<Icon name="list" size={30} color="#1c5ba7" />} titulo={"Lista de pozos"} nav={"Wells"}/>
            <View style={{flex: 1 ,justifyContent: 'flex-end'}}>
                <LogoutButton></LogoutButton>
            </View>
        </View>
    )
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
