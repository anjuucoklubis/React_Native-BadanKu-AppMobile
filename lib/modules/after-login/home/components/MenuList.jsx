import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function MenuList() {
  const navigation = useNavigation();

  const toHome = () => {
    navigation.navigate('Beranda');
  };

  const toBMI = () => {
    navigation.navigate('BMI');
  };

  const toAbout = () => {
    navigation.navigate('Tentang Aplikasi');
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 0,
      }}>
      <TouchableOpacity onPress={toHome}>
        <View
          style={{
            width: 80,
            height: 104,
          }}>
          <Image source={require('../../../../assets/dev/home/homeIcon.png')} />
          <Text
            style={{
              color: '#000000',
              textAlign: 'center',
            }}>
            Home
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={toBMI}>
        <View
          style={{
            width: 80,
            height: 104,
          }}>
          <Image source={require('../../../../assets/dev/home/bmiIcon.png')} />
          <Text
            style={{
              color: '#000000',
              textAlign: 'center',
            }}>
            BMI
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={toAbout}>
        <View
          style={{
            width: 80,
            height: 104,
          }}>
          <Image
            source={require('../../../../assets/dev/home/aboutIcon.png')}
          />
          <Text
            style={{
              color: '#000000',
              textAlign: 'center',
            }}>
            About
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
