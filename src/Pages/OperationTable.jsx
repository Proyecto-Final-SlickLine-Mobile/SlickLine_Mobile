import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../Styles/Styles';
import ButtonTouchable from './../Components/ButtonTouchable';
import * as data from '../../assets/data';

function OperationTable({ navigation, route }) {
  const datos = route.params;

  // let data
  console.log(data)
  const chartRedirection = () => {
    navigation.navigate('ChartsPage')
  }

  // (datos.data.data) ? data = datos.data.data : data = datos.data

  return (
    <>
      <FlatList
        style={{ flex: 1 }}
        data={data.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text>Parada: {index+1}</Text>
            <Text>{item.Pressure}</Text>
            <Text>{item.Temperature}</Text>
            <Text>{item.Depth}</Text>
            <Text>{item.Density}</Text>
          </View>
        )}
      />
      <ButtonTouchable
        styleButton={styles.button}
        styleText={styles.buttonText}
        text={'Mostrar en gráfico'}
        pressFunction={() => chartRedirection()}
      />
      <Text>asdasd</Text>
    </>
  );
}

export default OperationTable;
