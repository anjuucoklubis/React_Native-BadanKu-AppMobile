import {View, Text} from 'react-native';
import React from 'react';

export default function TujuanMakan() {
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          color: '#000000',
          fontWeight: 'bold',
          top: 15,
        }}>
        Tips Pola Makan
      </Text>
      <View>
        <Text
          style={{
            fontSize: 16,
            color: 'gray',
            top: 20,
          }}>
          Tujuan pola makan untuk badan
        </Text>
        <Text
          style={{
            color: 'black',
            top: 20,
            fontSize: 13,
            textAlign: 'justify',
          }}>
          Tujuan menjaga pola makan untuk diet adalah mencapai dan
          mempertahankan berat badan yang sehat serta mendukung kesehatan fisik
          dan mental secara optimal. Dengan mengatur pilihan makanan yang
          seimbang, terkendali, dan bergizi, tujuan ini bertujuan untuk
          mengontrol asupan kalori, mengatur kadar gula darah, dan menghindari
          konsumsi makanan olahan serta gula berlebih.
        </Text>
      </View>
    </View>
  );
}
