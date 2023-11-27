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
      updateRow(data.parada - 1, field, value);
    }
  };
  
  const densityInput = conditional === 'Sí' ? (
    <TextInput 
      placeholder="Densidad(kg/m³)" 
      onChangeText={(value) => updateRow(data.parada - 1, 'densidad', value)} 
      value={data.densidad}
    />
  ) : <Text></Text>;

  return (
    <View style={styles.row}>
      <Text style={{alignSelf: 'center'}}>Parada: {data.parada}</Text>
      <TextInput
        placeholder="Presión(psia)"
        keyboardType="numeric"
        returnKeyType="next"
        onFocus={() => setFocusedField('presion')}
        onChangeText={(value) => handleInputChange(value, 'presion')}
        onSubmitEditing={() => temperaturaRef.current.focus()}
      />
      <TextInput
        placeholder="Temperatura(C°)"
        keyboardType="numeric"
        returnKeyType="next"
        ref={temperaturaRef}
        onFocus={() => setFocusedField('temperatura')}
        onChangeText={(value) => handleInputChange(value, 'temperatura')}
        onSubmitEditing={() => profundidadRef.current.focus()}
      />
      <TextInput
        placeholder="Profundidad(m)"
        keyboardType="numeric"
        ref={profundidadRef}
        onFocus={() => setFocusedField('profundidad')}
        onChangeText={(value) => handleInputChange(value, 'profundidad')}
      />
      {densityInput}
    </View>
  )
}

export default RowsForm
