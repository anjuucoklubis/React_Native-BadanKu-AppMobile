import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import useBmiModel from './BmiModel';

const BmiView = () => {
  const {
    isWeight,
    isHeight,
    weightAddition,
    weightSubtraction,
    heightAddition,
    heightSubtraction,
    calculateBMI,
    isFixHeight,
    isCalculateBMI,
  } = useBmiModel();

  return (
    <View
      style={{
        backgroundColor: '#EEEEEE',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#000000',
        }}>
        Kalkulator BMI
      </Text>
      <View>
        <Image
          source={require('../../../assets/dev/bmi/bmihome.png')}
          style={{
            width: 500,
            height: 200,
            resizeMode: 'contain',
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            backgroundColor: '#D9D9D9',
            borderRadius: 20,
            width: 157,
            height: 196,
            marginRight: 15,
            shadowColor: '#1e90ff',
            shadowOffset: {width: 4, height: 4},
            shadowOpacity: 0.75,
            shadowRadius: 10.84,
            elevation: 30, //
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#000000',
            }}>
            Berat Badan
          </Text>
          <Text
            style={{
              fontSize: 70,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#000000',
            }}>
            {isWeight}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity onPress={weightAddition}>
              <Image source={require('../../../assets/dev/bmi/Group-21.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={weightSubtraction}>
              <Image source={require('../../../assets/dev/bmi/Group-20.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#D9D9D9',
            borderRadius: 20,
            width: 157,
            height: 196,
            shadowColor: '#1e90ff',
            shadowOffset: {width: 4, height: 4},
            shadowOpacity: 0.75,
            shadowRadius: 10.84,
            elevation: 30, //
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#000000',
            }}>
            Tinggi Badan
          </Text>
          <Text
            style={{
              fontSize: 70,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#000000',
            }}>
            {isHeight}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity onPress={heightAddition}>
              <Image source={require('../../../assets/dev/bmi/Group-21.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={heightSubtraction}>
              <Image source={require('../../../assets/dev/bmi/Group-20.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={calculateBMI}>
        <View
          style={{
            backgroundColor: '#F9AD2B',
            borderRadius: 100,
            height: 53,
            width: 308,
            justifyContent: 'center',
            shadowColor: 'white',
            shadowOffset: {width: 4, height: 4},
            shadowOpacity: 0.75,
            shadowRadius: 10.84,
            elevation: 15, //
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Hitung BMI
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BmiView;
