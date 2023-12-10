import React from 'react'
import { ScrollView, View } from 'react-native'
import { styleList, styles } from '../Styles/Styles'
import ButtonTouchable from './../Components/ButtonTouchable';
import { data } from '../../assets/data';

function JobsList({navigation}) {

    const tableRedirection = (data) => {
        navigation.navigate('Table', { data: data})
    }

  return (
    <View style={styles.container}>
        <ButtonTouchable
            styleButton={styleList.listEntry}
            styleText={styles.buttonText}
            text={'Operación n°17058 - 14/03/2023'}
            pressFunction={() => tableRedirection(data)}
        />
    </View>
  )
}

export default JobsList