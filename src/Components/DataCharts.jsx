import React, { useState } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import PressureDepthChart from './PressureDepthChart';
import TemperatureDepthChart from './TemperatureDepthChart';
import FluidTypeList from './FluidTypeList';
import * as data from '../../assets/data';

function calculateDensity(pressure, depth) {
  let g = 9.81; // aceleración debido a la gravedad en m/s²
  let pressureInPascals = pressure * 6894.76; // convertir la presión de psia a Pascales
  let density = pressureInPascals / (g * depth); // calcular la densidad en kg/m³
  return density;
}

export default function DataCharts() {
  const [selectedChart, setSelectedChart] = useState('pressure');

  const fluidTypes = data.data.map(item => {
    const density = calculateDensity(item.Pressure, item.Depth);
    let fluidType = "Desconocido";
    if (density >= 800 && density <= 900) {
      fluidType = "Agua Salada";
    } else if (density > 900) {
      fluidType = "Petróleo";
    } else {
      fluidType = "Gas";
    }
    return fluidType;
  });

  const pressureData = data.data.map((item, index) => ({
    value: item.Pressure,
    label: `P${item.Stop}`,
    depth: item.Depth,
    dataPointText: fluidTypes[index]
  }))

  const temperatureData = data.data.map((item, index) => ({
    value: item.Temperature,
    depth: item.Depth,
    label: `P${item.Stop}`,
    temp: item.Temperature,
    dataPointText: fluidTypes[index]
  }))

  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
        <Button title="Presión" onPress={() => setSelectedChart('pressure')} />
        <Button title="Temperatura" onPress={() => setSelectedChart('temperature')} />
        <Button title="Fluido" onPress={() => setSelectedChart('fluid')} />
      </View>
      <View style={{ marginTop: 30 }}></View>
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
      {selectedChart === 'fluid' && <FluidTypeList fluidTypes={fluidTypes} />}
    </ScrollView>
  );
}
