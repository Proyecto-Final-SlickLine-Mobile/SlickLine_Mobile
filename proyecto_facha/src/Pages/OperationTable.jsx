import React from 'react';
import { ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
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
    <ScrollView>
      <ButtonTouchable
          styleButton={styles.button}
          styleText={styles.buttonText}
          text={'Mostrar en gráfico'}
          pressFunction={() => chartRedirection()}
        />
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Parada</DataTable.Title>
          <DataTable.Title>Presión</DataTable.Title>
          <DataTable.Title>Temperatura</DataTable.Title>
          <DataTable.Title>Profundidad</DataTable.Title>
          <DataTable.Title>Densidad</DataTable.Title>
        </DataTable.Header>

        {data.data.map((item, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{index+1}</DataTable.Cell>
            <DataTable.Cell>{item.Pressure}</DataTable.Cell>
            <DataTable.Cell>{item.Temperature}</DataTable.Cell>
            <DataTable.Cell>{item.Depth}</DataTable.Cell>
            <DataTable.Cell>{item.Density}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
      
    </ScrollView>
  );
}

export default OperationTable;
