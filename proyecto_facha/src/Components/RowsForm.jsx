import React, { useRef, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { styles } from '../Styles/Styles'

function RowsForm({conditional, data, updateRow}) {

  const presionRef = useRef();
  const temperaturaRef = useRef();
  const profundidadRef = useRef();

  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (value, field) => {
    if (focusedField === field) {
      updateRow(data.stop - 1, field, value);
    }
  };
  
  const densityInput = conditional === 'Sí' ? (
    <TextInput 
      placeholder="Densidad(kg/m³)"
      keyboardType="numeric"
      onChangeText={(value) => updateRow(data.stop - 1, 'density', value)} 
      value={data.density.toString()}  // Convert the number to a string
    />
  ) : <Text></Text>;  

  return (
    <View style={styles.row}>
      <Text style={{alignSelf: 'center'}}>Parada: {data.stop}</Text>
      <TextInput
        placeholder="Presión(psia)"
        keyboardType="numeric"
        returnKeyType="next"
        onFocus={() => setFocusedField('pressure')}
        onChangeText={(value) => handleInputChange(value, 'pressure')}
        onSubmitEditing={() => temperaturaRef.current.focus()}
      />
      <TextInput
        placeholder="Temperatura(C°)"
        keyboardType="numeric"
        returnKeyType="next"
        ref={temperaturaRef}
        onFocus={() => setFocusedField('temperature')}
        onChangeText={(value) => handleInputChange(value, 'temperature')}
        onSubmitEditing={() => profundidadRef.current.focus()}
      />
      <TextInput
        placeholder="Profundidad(m)"
        keyboardType="numeric"
        ref={profundidadRef}
        onFocus={() => setFocusedField('depth')}
        onChangeText={(value) => handleInputChange(value, 'depth')}
      />
      {densityInput}
    </View>
  )
}

export default RowsForm