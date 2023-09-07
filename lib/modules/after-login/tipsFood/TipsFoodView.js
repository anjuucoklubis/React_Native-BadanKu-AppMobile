import {View, ScrollView} from 'react-native';
import React from 'react';

import Header from './components/Header';
import TujuanMakan from './components/TujuanMakan';
import ContohMakan from './components/ContohMakan';
import IntiKunciMakan from './components/IntiKunciMakan';

const TipsFoodView = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#EEEEEE',
        padding: 15,
      }}>
      <Header />

      <ScrollView>
        <TujuanMakan />
        <ContohMakan />

        <IntiKunciMakan />
      </ScrollView>
    </View>
  );
};

export default TipsFoodView;
