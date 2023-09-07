import {View, Text} from 'react-native';
import React from 'react';

export default function TujuanOlahraga() {
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          color: '#000000',
          fontWeight: 'bold',
          top: 15,
        }}>
        Tips Olahraga
      </Text>
      <View>
        <Text
          style={{
            fontSize: 16,
            color: 'gray',
            top: 20,
          }}>
          Tujuan Olahraga untuk badan
        </Text>
        <Text
          style={{
            color: 'black',
            top: 20,
            fontSize: 13,
            textAlign: 'justify',
          }}>
          Tujuan dari olahraga untuk badan adalah untuk mencapai dan
          mempertahankan kondisi fisik yang optimal. Dengan berolahraga secara
          teratur, tubuh akan menjadi lebih kuat dan lebih sehat secara
          keseluruhan. Olahraga dapat membantu mengurangi lemak tubuh yang
          berlebih, meningkatkan massa otot, dan memperbaiki postur tubuh.
          Selain itu, olahraga juga dapat meningkatkan kesehatan jantung dan
          sirkulasi darah, serta membantu mengendalikan berbagai kondisi
          kesehatan seperti diabetes dan tekanan darah tinggi. Selain manfaat
          fisik, olahraga juga memiliki dampak positif pada kesehatan mental,
          seperti mengurangi stres, meningkatkan mood, dan meningkatkan kualitas
          tidur. Dengan berbagai manfaat ini, olahraga menjadi kunci untuk
          mencapai gaya hidup sehat dan mengoptimalkan kualitas hidup secara
          keseluruhan.
        </Text>
      </View>
    </View>
  );
}
