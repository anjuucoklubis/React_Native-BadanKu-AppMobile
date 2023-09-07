import {View, Text, Image} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <View>
          <Image
            style={{
              resizeMode: 'contain',
              width: 380,
              height: 240,
            }}
            source={require('../../../../assets/dev/home/bgHome.png')}
          />
        </View>
        <View
          style={{
            top: -145,
            justifyContent: 'space-evenly',
            marginLeft: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              bottom: 60,
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
                fontSize: 30,
                textAlign: 'left',
                fontWeight: 'bold',
                marginLeft: 10,
                color: '#FFFFFF',
              }}>
              BadanKu
            </Text>
          </View>

          <View
            style={{
              bottom: 50,
            }}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'left',
                marginLeft: 10,
                color: '#FFFFFF',
              }}>
              Hello !
            </Text>
          </View>

          <View
            style={{
              bottom: 50,
            }}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'left',
                marginLeft: 10,
                color: '#FFFFFF',
              }}>
              Selamat Datang di aplikasi BadanKu
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
