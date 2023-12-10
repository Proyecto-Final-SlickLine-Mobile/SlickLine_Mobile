// ChartsPage.jsx
import React from 'react';
import DataCharts from '../Components/DataCharts';
import { View } from 'react-native';
import { Text } from 'react-native';
import ChartsData from '../Components/ChartsData';

function ChartsPage({ route }) {
  // const { data } = route.params;

  return (
    <View>
      {/* <ChartsData data={data} /> */}
      <DataCharts />
    </View>
  );
}

export default ChartsPage;
