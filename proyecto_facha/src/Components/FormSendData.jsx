import React, { useRef, useState } from 'react'
import { styles } from '../Styles/Styles';
import { ScrollView, View, Text, TextInput } from 'react-native';
import RowsForm from './RowsForm';
import ButtonTouchable from './ButtonTouchable';
import * as dataImported from '../../assets/data'

function FormSendData({navigation, route}) {
    const [rows, setRows] = useState([{ stop: 1, pressure: '', temperature: '', depth: '', density: '' }]);
    const [operationNumber, setOperationNumber] = useState('');
    const scrollViewRef = useRef();

    const { data } = route.params;
    const { option } = route.params;
    console.log(option)

    const addRow = () => {
      const newRow = { stop: rows.length + 1, pressure: '', temperature: '', depth: '', density: '' };
      setRows([...rows, newRow]);
      scrollViewRef.current.scrollToEnd({ animated: true });
    };
  
    const deleteRow = () => {
      const newRows = [...rows];
      newRows.pop();
      setRows(newRows);
    };
  
    const updateRow = (index, field, value) => {
      const newRows = [...rows];
      newRows[index][field] = Number(value);
      setRows(newRows);
    };    
  
    // FormSendData.jsx
    const sendData = () => {
      console.log(JSON.stringify(rows));

      // Buscar el pozo por su nombre
      const well = dataImported.wells.find(well => well.name === option);

      // Si el pozo existe
      if (well) {
          // Crear una nueva operación con los datos del formulario
          const newOperation = {
              name: `Operación n° ${operationNumber}`, // Usa el número de la operación del estado
              data: rows
          };

          // Agregar la nueva operación al array de operations del pozo
          well.operations.push(newOperation);
      }

      navigation.navigate('ChartsPage', { data: rows });
  };
    
  
  return (
    <ScrollView style={styles.container} ref={scrollViewRef}>
        <View style={{marginBottom: 30}}></View>
        <Text>Operación n°</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setOperationNumber(text)}
            value={operationNumber}
            keyboardType="numeric"
        />
        {rows.map((row, index) => (
            <RowsForm key={index} data={row} updateRow={updateRow} conditional={data} />
        ))}
        <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
                <ButtonTouchable
                    text="Agregar fila"
                    styleButton={[styles.sendButton, {width: '60%'}]}
                    styleText={styles.buttonText}
                    pressFunction={addRow}
                />
            </View>
            <View style={styles.buttonWrapper}>
                <ButtonTouchable
                    text="Eliminar fila"
                    styleButton={[styles.sendButton, {width: '60%'}]}
                    styleText={styles.buttonText}
                    pressFunction={deleteRow}
                />
            </View>
        </View>
        <ButtonTouchable
            text="Enviar"
            styleButton={styles.sendButton}
            styleText={styles.buttonText}
            pressFunction={sendData} 
        />
        <View style={{marginBottom: 30}}></View>
    </ScrollView>
)
}

export default FormSendData