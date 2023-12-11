import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: verticalScale(5),
    },
    buttonContainer: {
      flexDirection: 'row',
      marginBottom: verticalScale(5), // o cualquier valor que desees para el espacio entre los botones y el siguiente elemento
      justifyContent: "space-between",
    },
    buttonWrapper: {
      width: '45%', // ajusta este valor para cambiar el espacio entre los botones
    },
    button: {
      borderStyle: 'solid',
      borderWidth: moderateScale(1),
      borderRadius: moderateScale(5),
      marginBottom: verticalScale(10),
      borderColor: "#000000",
      backgroundColor: "#007bff",
      width :'60%',
      height: '5%',
      alignSelf: 'center',
      justifyContent: "center"
    },
    sendButton: {
      borderStyle:'solid',
      borderWidth :moderateScale(1),
      borderRadius :moderateScale(5),
      borderColor :"#000000",
      backgroundColor :"#007bff",
      width :'50%',
      alignSelf: 'center',
      marginTop :moderateScale(15)
    },
    buttonText: {
      textAlign: 'center',
      fontSize: moderateScale(17)
    },
    imageBack: {
      flex: 1,
      justifyContent: 'center',
    },
    logoContainer: {
      // Configuración de tamaño fijo para el contenedor de la imagen
      width: '100%',
      height: '30%',
      // Margen inferior para separar la imagen del texto
      marginBottom: 20,
      marginTop: 30
    
    },
    buttonGraph: {
      borderStyle: 'solid',
      borderWidth: moderateScale(1),
      borderRadius: moderateScale(5),
      borderColor: "#000000",
      justifyContent: "center"
    },
    buttonInicio: {
      borderStyle: 'solid',
      borderWidth: moderateScale(1),
      borderRadius: moderateScale(5),
      borderColor: "#000000",
      justifyContent: "center",
      height: 60,
      marginBottom: moderateScale(40)
    }
  });

export const styleList = StyleSheet.create({
  list: {
    backgroundColor: "#007bff",
    borderColor :"#000000",
    borderWidth :moderateScale(1),
    borderRadius :moderateScale(5),
    width: '75%'
  },
  listEntry: {
    borderStyle:'solid',
    borderWidth :moderateScale(2),
    borderRadius :moderateScale(5),
    borderColor :"#000000",
    backgroundColor :"#007bff",
    width :'90%',
    height: '20%',
    alignSelf: 'center',
    marginTop :moderateScale(15),
    justifyContent: "center"
  },
})