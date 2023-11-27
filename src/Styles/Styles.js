import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: scale(20),
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
      borderColor: "#000000",
      backgroundColor: "#efd510",
      width: '100%',
      justifyContent: "center"
    },
    sendButton: {
      borderStyle:'solid',
      borderWidth :moderateScale(1),
      borderRadius :moderateScale(5),
      borderColor :"#000000",
      backgroundColor :"#efd510",
      width :'50%',
      alignSelf: 'center',
      marginTop :moderateScale(15)
    },
    buttonText: {
      textAlign: 'center',
      fontSize: moderateScale(17)
    }
  });

export const styleList = StyleSheet.create({
  list: {
    backgroundColor: "#efd510",
    borderColor :"#000000",
    borderWidth :moderateScale(1),
    borderRadius :moderateScale(5),
    width: '75%'
  },
  listEntry: {
    borderStyle:'solid',
    borderWidth :moderateScale(1),
    borderRadius :moderateScale(5),
    borderColor :"#000000",
    backgroundColor :"#efd510",
    width :'90%',
    alignSelf: 'center',
    marginTop :moderateScale(15)
  },
})