import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import PressureDepthChart from './PressureDepthChart';
import TemperatureDepthChart from './TemperatureDepthChart';
import FluidTypeList from './FluidTypeList';
import * as dataFormated from '../../assets/data.js';
import Predict from './Predict'; 
import { styles } from '../Styles/Styles'
import Icon from 'react-native-vector-icons/FontAwesome';

const chartData = [
  {"x": '2024-01', "y": 10000},
  {"x": '2024-05', "y": 80000},
  {"x": '2024-09', "y": 150000},
  {"x": '2025-01', "y": 210000},
  {"x": '2025-05', "y": 280000},
  {"x": '2025-09', "y": 350000},
  {"x": '2026-01', "y": 420000},
  {"x": '2026-05', "y": 490000},
  {"x": '2026-09', "y": 560000},
  {"x": '2027-01', "y": 630000},
];

function calculateDensity(pressure, depth) {
  let g = 9.81; // aceleración debido a la gravedad en m/s²
  let pressureInPascals = pressure * 6894.76; // convertir la presión de psia a Pascales
  let density = pressureInPascals / (g * depth); // calcular la densidad en kg/m³
  return density;
}

export default function DataCharts({ datos }) {
  const [selectedChart, setSelectedChart] = useState('pressure');

  const data = datos

  const fluidTypes = data.map(item => {
    const density = calculateDensity(item.pressure, item.depth);
    let fluidType = "Desconocido";
    if (density >= 1025) {
        fluidType = "Agua Salada";
    } else if (density > 980 && density < 1025) {
      fluidType = "Mezcla de agua y petroleo"; 
    } else if (density >= 800 && density <= 980) {
        fluidType = "Petróleo";
    } else if (density >= 350 && density < 800) {
        fluidType = "Mezcla de Petróleo y Gas";
    } else if (density < 350) {
        fluidType = "Gas";
    }
    return fluidType;
  });

  const predictData = chartData.map((item, index) => ({
    value: item.y, 
    label: item.x,
    
  })) 

  const pressureData = data.map((item, index) => ({
    value: item.pressure,
    label: `P${item.stop}`,
    depth: item.depth,
    dataPointText: fluidTypes[index]
  }));

  const temperatureData = data.map((item, index) => ({
    value: item.temperature,
    depth: item.depth,
    label: `P${item.stop}`,
    temp: item.temperature,
    dataPointText: fluidTypes[index]
  }));

  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
      <TouchableOpacity style={styles.buttonGraph} onPress={() => setSelectedChart('pressure')}>
        <Text>   <Icon name="tachometer" size={20} color="#FF9E0A" /> Presión   </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonGraph} onPress={() => setSelectedChart('temperature')}>
        <Text>   <Icon name="thermometer-half" size={20} color="#FF2020" /> Temperatura   </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonGraph} onPress={() => setSelectedChart('fluid')}>
        <Text>   <Icon name="tint" size={20} color="#204CFF" /> Fluido   </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonGraph} onPress={() => setSelectedChart('predict')}>
        <Text>   <Icon name="line-chart" size={20} color="#000" /> Predicción   </Text>
      </TouchableOpacity>
    </View>
      <View style={{ marginTop: 10 }}></View>
      {selectedChart === 'pressure' && (
        <>
          <Text>Gráfico de Presión vs Profundidad</Text>
          <PressureDepthChart data={pressureData} />
        </>
      )}
      {selectedChart === 'temperature' && (
        <>
          <Text>Gráfico de Temperatura vs Profundidad</Text>
          <TemperatureDepthChart data={temperatureData} />
        </>
      )}
      {selectedChart === 'fluid' && <FluidTypeList fluidTypes={fluidTypes} data={data} />}
      {selectedChart === 'predict' && <Predict chartData={predictData} />}
    </ScrollView>
  );
}
