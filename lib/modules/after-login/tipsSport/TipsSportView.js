import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import IntiKunciOlahraga from './components/IntiKunciOlahraga';
import ContohOlahraga from './components/ContohOlahraga';
import Header from './components/Header';
import TujuanOlahraga from './components/TujuanOlahraga';

const TipsSportView = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#EEEEEE',
        padding: 15,
      }}>
      <Header />

      <ScrollView>
        <TujuanOlahraga />

        <ContohOlahraga />

        <View
          style={{
            top: 50,
            marginBottom: 200,
          }}>
          <IntiKunciOlahraga />
        </View>
      </ScrollView>
    </View>
  );
};

export default TipsSportView;
