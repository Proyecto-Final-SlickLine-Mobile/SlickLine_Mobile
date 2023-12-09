import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import * as dataFormated from '../../assets/data';

function calculateDensity(pressure, depth) {
  if (depth === 0) {
    return 0;
  }
  let g = 9.81;
  let pressureInPascals = pressure * 6894.76;
  let density = pressureInPascals / (g * depth);
  return density;
}

console.log(dataFormated)

export default function FileUploader({ navigation }) {
  const [data, setData] = useState(null);

  const processFile = async (fileContent) => {
    // console.log(fileContent)
    // const lines = fileContent.split('\n');

    // let headers = lines[0].split(/\s+/);
    // let timeIndex = headers.indexOf('Time');
    // let pressureIndex = headers.indexOf('Pressure');
    // let temperatureIndex = headers.indexOf('Temperature');
    // let depthIndex = headers.indexOf('Depth');
    // let dpDzIndex = headers.indexOf('Dp/Dz');
    // let dtDzIndex = headers.indexOf('Dt/Dz');
    // let stopIndex = headers.length - 1;

    // let formattedData = lines.slice(1).map(line => {
    //   let parts = line.split(/\s+/);
    //   if (parts.length < headers.length) {
    //     return null;
    //   }
    //   let time = parseFloat(parts[timeIndex]);
    //   let pressure = parseFloat(parts[pressureIndex]);
    //   let temperature = parseFloat(parts[temperatureIndex]);
    //   let depth = parseFloat(parts[depthIndex]);
    //   let dpDz = parseFloat(parts[dpDzIndex]);
    //   let dtDz = parseFloat(parts[dtDzIndex]);
    //   let stop = 'P ' + parts.slice(stopIndex).join(' ').replace('PARADA N° ', '');
    //   let density = calculateDensity(pressure, depth);
    //   return {
    //     Time: time,
    //     Stop: stop,
    //     Pressure: pressure,
    //     Temperature: temperature,
    //     Depth: depth,
    //     DpDz: dpDz,
    //     DtDz: dtDz,
    //     Density: density
    //   };
    // }).filter(item => item !== null && !isNaN(item.Pressure));

    navigation.navigate('Table')
  }

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      console.log(result)
      if (!result.canceled) {
        const fileContent = await FileSystem.readAsStringAsync(result.assets[0].uri, {
          encoding: FileSystem.EncodingType.UTF8,
        });

        processFile(fileContent);
      }
    } catch (error) {
      console.error('Error reading the file: ', error);
    }
  };

  return (
    <ScrollView>
      <Button title="Cargar archivo" onPress={pickDocument} />
    </ScrollView>
  );
}