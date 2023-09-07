import {View, Text, Image} from 'react-native';
import React from 'react';
import {IntiKunciMakanData} from '../../../../assets/constants/data';
export default function IntiKunciMakan() {
  const dataaa = IntiKunciMakanData;
  return (
    <View
      style={{
        top: 50,
        marginBottom: 150,
      }}>
      <Text
        style={{
          fontSize: 16,
          color: 'gray',
        }}>
        Inti Kunci
      </Text>

      {dataaa.map(item => {
        return (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image source={item.sliderImage} />

            <Text
              style={{
                color: 'black',
                fontSize: 13,
                textAlign: 'justify',
              }}>
              {item.text}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
