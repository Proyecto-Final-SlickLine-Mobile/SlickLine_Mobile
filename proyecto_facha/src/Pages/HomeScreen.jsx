import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './../Styles/Styles';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import logo from '../../assets/app_media/refsaHidro_logo.png'
import { StyleSheet } from 'react-native';
import ButtonTouchable from './../Components/ButtonTouchable';


function HomeScreen({ navigation }) {

    const homeRedirection = () => {
        navigation.navigate('Principal')
    }

  return (
    <View style={styles.container}>
      {/* Contenedor de la imagen */}
      <View style={myStyles.logoContainer}>
        {/* Imagen con width y height al 100% del contenedor y resizeMode: 'contain' */}
        <Image
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          source={logo}
        />
      </View>
      <ButtonTouchable
        styleButton={myStyles.buttonHome}
        styleText={myStyles.buttonText}
        text={'Ingresar'}
        pressFunction={homeRedirection}
      />
    </View>
  );
}

export default HomeScreen;

const myStyles = StyleSheet.create({
  logoContainer: {
    // Configuración de tamaño fijo para el contenedor de la imagen
    width: '100%',
    height: '17%',
    // Margen inferior para separar la imagen del texto
    marginBottom: 20,
  },
  buttonHome: {
        borderStyle:'solid',
        borderWidth :moderateScale(1),
        borderRadius :moderateScale(5),
        borderColor :"#000000",
        backgroundColor :"#1c5ba7",
        width :'50%',
        alignSelf: 'center',
        marginTop :moderateScale(15)
    },
    buttonText: {
        textAlign: 'center',
        fontSize: moderateScale(17),
        marginBottom: 3,
        color: 'white'
      }
});