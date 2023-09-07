import {View, Text, Image} from 'react-native';
import React from 'react';
import {IntiKunciOlahraga} from '../../../../assets/constants/data';
export default function IntiKunciModel() {
  const dataaa = IntiKunciOlahraga;
  return (
    <View
      style={{
        marginBottom: -100,
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
