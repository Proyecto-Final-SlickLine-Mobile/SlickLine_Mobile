import React, { useRef, useState } from 'react'
import { styles } from '../Styles/Styles';
import { ScrollView, View } from 'react-native';
import RowsForm from './RowsForm';
import ButtonTouchable from './ButtonTouchable';

function FormSendData({navigation, route}) {
    const [rows, setRows] = useState([{ parada: 1, presion: '', temperatura: '', profundidad: '', densidad: '' }]);
    const scrollViewRef = useRef();
  
    const { data } = route.params


    const addRow = () => {
      const newRow = { parada: rows.length + 1, presion: '', temperatura: '', profundidad: '', densidad: '' };
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
        navigation.navigate('ChartsPage', { data: rows });
    };
    
  
    return (
      <ScrollView style={styles.container} ref={scrollViewRef}>
        <View style={{marginBottom: 30}}></View>
        {rows.map((row, index) => (
          <RowsForm key={index} data={row} updateRow={updateRow} conditional={data} />
        ))}
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <ButtonTouchable
              text="Agregar fila"
              styleButton={styles.button}
              styleText={styles.buttonText}
              pressFunction={addRow}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <ButtonTouchable
              text="Eliminar fila"
              styleButton={styles.button}
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