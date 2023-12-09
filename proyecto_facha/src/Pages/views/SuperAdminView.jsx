import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ButtonNavigation } from '../../Components/ButtonNavigation';
import { useAuth } from '../../contexts/AuthContext';
import LogoutButton from "../../Components/LogoutButton";

export const SuperAdminView = () => {
    const { user } = useAuth();

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Hola {user.username}, bienvenido</Text>
            
            <View style={styles.grid}>
                <ButtonNavigation style={styles.button} titulo={"Registrar usuario"} nav={"Registro de usuarios"}/>
                <ButtonNavigation style={styles.button} titulo={"Carga de archivos"} nav={"FileUploader"}/>
                <ButtonNavigation style={styles.button} titulo={"Carga de datos manual"} nav={"Pregunta"}/>
                <ButtonNavigation style={styles.button} titulo={"Lista de operaciones"} nav={"JobsList"}/>
            </View>
            <LogoutButton style={styles.logoutButton}></LogoutButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 20,
    },
    welcomeText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 40,
    },
    grid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: '#841584',
        padding: 80,
        margin: 10,
        borderRadius: 5,
        width: '100%',
    },
    logoutButton: {
        backgroundColor: '#FF0000',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignSelf: 'stretch',
    },
});
