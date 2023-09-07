import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Tips() {
  const navigation = useNavigation();
  const tipsSport = () => {
    navigation.navigate('TipsSportView');
  };

  const tipsFood = () => {
    navigation.navigate('TipsFoodView');
  };
  return (
    <View
      style={{
        justifyContent: 'space-evenly',
        top: 30,
      }}>
      <Text
        style={{
          color: '#000000',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'left',
          marginLeft: 30,
          top: -10,
        }}>
        Tips untuk kamu...
      </Text>

      <View
        style={{
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={tipsSport}>
          <View
            style={{
              borderRadius: 15,
              backgroundColor: '#FFFFFF',
              width: 308,
              height: 113,
              alignContent: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                justifyContent: 'center',
                marginLeft: 5,
              }}>
              <Image
                style={{
                  resizeMode: 'stretch',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  alignContent: 'center',
                }}
                source={require('../../../../assets/dev/home/icon5.png')}
              />
            </View>
            <View
              style={{
                right: 20,
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#000000',
                  textAlign: 'center',
                  top: 45,
                }}>
                Tips Olahraga
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={tipsFood}>
          <View
            style={{
              borderRadius: 15,
              backgroundColor: '#FFFFFF',
              width: 308,
              height: 113,
              alignContent: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              top: 10,
              marginBottom: 70,
            }}>
            <View
              style={{
                justifyContent: 'center',
                marginLeft: 5,
              }}>
              <Image
                style={{
                  resizeMode: 'stretch',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  alignContent: 'center',
                }}
                source={require('../../../../assets/dev/home/iconmakan.png')}
              />
            </View>
            <View
              style={{
                right: 40,
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#000000',
                  textAlign: 'center',
                  top: 45,
                }}>
                Tips Food
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
