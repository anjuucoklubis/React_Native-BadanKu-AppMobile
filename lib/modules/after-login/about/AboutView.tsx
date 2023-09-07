import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import React from 'react';

const AboutView = () => {
  const openLink = (link: string) => {
    if (link) {
      Linking.openURL(link);
    } else {
      console.log('Tautan tidak tersedia.');
    }
  };

  const profileLink = 'https://anjulubis.vercel.app';
  return (
    <View
      style={{
        backgroundColor: '#EEEEEE',
        flex: 1,
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: '#000000',
        }}>
        ABOUT
      </Text>

      <View>
        <Image
          source={require('../../../assets/dev/about/about.png')}
          style={{
            resizeMode: 'contain',
            width: 300,
            height: 300,
          }}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              color: '#000000',
            }}>
            BadanKu adalah aplikasi Perhitungan Indeks Massa Tubuh ini merupakan
            aplikasi perhitungan untuk menghitung seberapa ideal antara berat
            badan dan tinggi badan sesuai dengan BMI (Body Mass Index) atau
            biasa dikenal dengan IMT (Indeks Massa Tubuh) untuk dipergunakan
            bagi pada penderita obesitas.
          </Text>
        </View>

        <View
          style={{
            marginTop: 40,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 17,
                textAlign: 'center',
                color: '#000000',
              }}>
              Develop by : Anju Lubis{' || '}
            </Text>

            <TouchableOpacity onPress={() => openLink(profileLink)}>
              <Text
                style={{
                  fontSize: 17,
                  textAlign: 'center',
                  color: 'blue',
                  fontStyle: 'italic',
                }}>
                Visit My Profile
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontSize: 17,
              textAlign: 'center',
              color: '#000000',
            }}>
            Version Apk: 0.0.1
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AboutView;
