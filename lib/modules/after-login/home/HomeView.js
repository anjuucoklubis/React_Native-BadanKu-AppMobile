import {View, ScrollView} from 'react-native';
import React from 'react';
import Header from './components/Header';
import MenuList from './components/MenuList';
import Tips from './components/Tips';

const HomeView = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#EEEEEE',
        justifyContent: 'space-evenly',
      }}>
      <Header />
      <ScrollView
        style={{
          marginTop: -100,
        }}>
        <MenuList />
        <Tips />
      </ScrollView>
    </View>
  );
};

export default HomeView;
