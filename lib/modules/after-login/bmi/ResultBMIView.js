import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const ResultBMIView = () => {
  const route = useRoute();
  const {bmiValue, weightValue, heightValue, messageValue} = route.params;
  const roundedBMI = Math.round(bmiValue);
  const navigation = useNavigation();
  const Kembali = () => {
    navigation.navigate('BMI');
  };
  return (
    <View
      style={{
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-evenly',
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#000000',
          }}>
          HASIL BMI
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 25,
          width: 307,
          height: 115,
          justifyContent: 'space-evenly',
          shadowColor: '#1e90ff',
          shadowOffset: {width: 4, height: 4},
          shadowOpacity: 0.75,
          shadowRadius: 10.84,
          elevation: 10, //
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#000000',
            }}>
            Berat Kamu
          </Text>
          <Text
            style={{
              fontSize: 30,
              color: '#000000',
            }}>
            {weightValue}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#F9AD2B',
            }}>
            Kilogram
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#000000',
            }}>
            Tinggi Kamu
          </Text>
          <Text
            style={{
              fontSize: 30,
              color: '#000000',
            }}>
            {heightValue}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#F9AD2B',
            }}>
            Centimeter
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 25,
          width: 307,
          height: 115,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          shadowColor: '#1e90ff',
          shadowOffset: {width: 4, height: 4},
          shadowOpacity: 0.75,
          shadowRadius: 10.84,
          elevation: 10, //
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#000000',
            }}>
            BMI Kamu
          </Text>
          <Text
            style={{
              fontSize: 30,
              color: '#000000',
            }}>
            {roundedBMI}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#F9AD2B',
            }}>
            {messageValue}
          </Text>
        </View>
      </View>

      <View>
        <Image
          source={require('../../../assets/dev/bmi/bmi.png')}
          style={{
            height: 320,
            width: 250,
            resizeMode: 'stretch',
          }}
        />
      </View>

      <TouchableOpacity onPress={Kembali}>
        <View
          style={{
            backgroundColor: '#F9AD2B',
            borderRadius: 30,
            height: 50,
            width: 200,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Kembali
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ResultBMIView;
