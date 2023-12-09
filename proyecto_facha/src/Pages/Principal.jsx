import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonTouchable from './../Components/ButtonTouchable';
import { styleList, styles } from '../Styles/Styles';

function Principal({navigation}) {

    const listRedirection = () => {
        navigation.navigate('JobsList')
    }

    const questionRedirection = () => {
        navigation.navigate('Pregunta')
    }
    
  return (
    <View style={miniStyle.container}>

        <ButtonTouchable
            styleButton={styleList.listEntry}
            styleText={styles.buttonText}
            text={'Cargar datos'}
            pressFunction={questionRedirection}
        />
        <ButtonTouchable
            styleButton={styleList.listEntry}
            styleText={styles.buttonText}
            text={'Lista de operaciones'}
            pressFunction={listRedirection}
        />
    </View>
  )
}

export default Principal

const miniStyle = StyleSheet.create({
    container: {
        flex: 1,
    }
})