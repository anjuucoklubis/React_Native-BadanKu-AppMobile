import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

export default function Header() {
  const navigation = useNavigation();
  const back = () => {
    navigation.navigate('MainApp');
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={back}>
        <Image source={require('../../../../assets/main/arrawBack.png')} />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={{
            resizeMode: 'contain',
            width: 55,
            height: 55,
            right: 5,
          }}
          source={require('../../../../assets/main/logo.png')}
        />
        <Text
          style={{
            color: '#000000',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          BadanKu
        </Text>
      </View>
    </View>
  );
}
