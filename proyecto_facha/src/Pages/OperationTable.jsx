import React from 'react';
import { ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import { styles } from '../Styles/Styles';
import ButtonTouchable from './../Components/ButtonTouchable';

function OperationTable({ navigation, route }) {
  const { operation } = route.params;

  const chartRedirection = () => {
    navigation.navigate('ChartsPage', { data: operation.data });
  };

  return (
    <ScrollView>
      <ButtonTouchable
        styleButton={styles.sendButton}
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
        </DataTable.Header>

        {operation.data.map((item, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{item.stop}</DataTable.Cell>
            <DataTable.Cell>{item.pressure}</DataTable.Cell>
            <DataTable.Cell>{item.temperature}</DataTable.Cell>
            <DataTable.Cell>{item.depth}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
  );
}

export default OperationTable;
