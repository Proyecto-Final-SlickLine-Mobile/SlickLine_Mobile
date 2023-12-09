import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const TemperatureDepthChart = ({ data }) => {
  return (
    <ScrollView horizontal={true}>
        <LineChart
          areaChart
          initialSpacing={10}
          data={data}
          height={330}
          maxValue={65}
          yAxisOffset={110}
          spacing={54}
          hideRules
          showVerticalLines
          startFillColor="rgba(20,105,81,0.3)"
          endFillColor="rgba(20,85,81,0.01)"
          startOpacity={0.9}
          endOpacity={0.2}
          verticalLinesColor={"skyblue"}
          backgroundColor="black"
          color1="skyblue"
          textColor1="white"
          dataPointsHeight={6}
          dataPointsWidth={6}
          dataPointsColor1="red"
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
                    height: 130,
                    width: 150,
                    backgroundColor: '#282C3E',
                    borderRadius: 4,
                    justifyContent: 'center',
                    paddingLeft: 16,
                  }}>
                  <Text style={{ color: 'lightgray', fontSize: 12 }}>Temperatura</Text>
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.temp}</Text>
                  <Text style={{ color: 'lightgray', fontSize: 12, marginTop: 12 }}>Profundidad</Text>
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.depth}</Text>
                </View>
              );
            },
          }}
        />
      </ScrollView>
  );
};

export default TemperatureDepthChart;