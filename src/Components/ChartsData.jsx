import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function ChartsData({data}) {
    // Crear arrays para profundidad, presión y temperatura
    const presion = data.map(item => item.presion);
    const temperatura = data.map(item => item.temperatura);
    const profundidad = data.map(item => item.profundidad.toString()); // Convertir a cadenas

    function calculateDensity(pressure, depth) {
      if (!pressure || !depth) {
        return null;
      }
    
      let g = 9.81; // aceleración debido a la gravedad en m/s²
      let pressureInPascals = parseFloat(pressure) * 6894.76; // convertir la presión de psia a Pascales
      let density = pressureInPascals / (g * parseFloat(depth)); // calcular la densidad en kg/m³
    
      return density;
    }

    const fluidTypes = data.map(item => {
      let density;
      if (item.densidad) {
        // Si el usuario proporcionó un valor de densidad, úsalo
        density = parseFloat(item.densidad);
      } else {
        // Si no, calcula la densidad a partir de la presión y la profundidad
        density = calculateDensity(item.presion, item.profundidad);
      }
    
      let fluidType = "Desconocido";
    
      if (density >= 800 && density <= 900) {
        fluidType = "Agua Salada";
      } else if (density > 900) {
        fluidType = "Petróleo";
      } else if (density < 800) {
        fluidType = "Gas";
      }
    
      return fluidType;
    });
    

    const chartDataPresion = {
      labels: profundidad, // Profundidad en el eje X
      datasets: [
        {
          data: presion, // Presión en el eje Y
        },
      ],
    };

    const chartDataTemperatura = {
      labels: profundidad, // Profundidad en el eje X
      datasets: [
        {
          data: temperatura, // Temperatura en el eje Y
        },
      ],
    };

    return (
      <View>
        <Text>Gráfico del Gradiente de Presión</Text>
        <LineChart
          data={chartDataPresion}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={{
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2,
            barPercentage: 0.5,
          }}
          bezier
        />
        <Text>Gráfico del Gradiente de Temperatura</Text>
        <LineChart
          data={chartDataTemperatura}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={{
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2,
            barPercentage: 0.5,
          }}
          bezier
        />
      </View>
    );
}
