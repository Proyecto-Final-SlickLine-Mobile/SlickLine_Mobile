// Archivo: Predict.js
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const data = [
    {x: '2024-01', y: 10000},
    {x: '2024-05', y: 90000},
    {x: '2024-09', y: 150000},
    {x: '2025-01', y: 210000},
    {x: '2025-05', y: 290000},
    {x: '2025-09', y: 350000},
    {x: '2026-01', y: 410000},
    {x: '2026-05', y: 490000},
    {x: '2026-09', y: 550000},
    {x: '2027-01', y: 610000},
];

const Predict = ({ data }) => {
  // Asegúrate de que 'data' es el array de datos que proporcionaste
  return (
    <ScrollView horizontal={true}>
        <LineChart
            areaChart
            initialSpacing={10}
            data={data}
            height={280}
            maxValue={610000} // Actualiza el valor máximo para que coincida con el valor más alto de tus datos
            showVerticalLines
            backgroundColor="black"
            startFillColor="rgba(20,105,81,0.3)"
            endFillColor="rgba(20,85,81,0.01)"
            startOpacity={0.9}
            endOpacity={0.2}
            spacing={54}
            color1="skyblue"
            textColor1="white"
            hideRules
            dataPointsHeight={6}
            dataPointsWidth={6}
            verticalLinesColor={"skyblue"}
            dataPointsColor1="red"
            yAxisColor="black"
            xAxisColor="black"
            yAxisTextStyle={{ color: 'black' }}
            textShiftY={-2}
            textShiftX={6}
            textFontSize={11}
            pointerConfig={{
            pointerStripUptoDataPoint: true,
            pointerStripColor: 'lightgray',
            pointerStripWidth: 2,
            strokeDashArray: [2, 5],
            pointerColor: 'red',
            radius: 4,
            pointerLabelWidth: 100,
            pointerLabelHeight: 120,
            pointerLabelComponent: items => {
                const item = items[0];
                return (
                <View
                    style={{
                    height: 120,
                    width: 120,
                    backgroundColor: '#282C3E',
                    borderRadius: 4,
                    justifyContent: 'center',
                    paddingLeft: 16,
                    paddingRight: 16
                    }}>
                    <Text style={{ color: 'lightgray', fontSize: 12 }}>Fecha</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.x}</Text>
                    <Text style={{ color: 'lightgray', fontSize: 12, marginTop: 12 }}>Valor</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.y}</Text>
                </View>
                );
            },
            }}
        />
    </ScrollView>
  );
};

export default Predict;
