import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import React from 'react';
import {polamakan} from '../../../../assets/constants/data';

export default function ContohMakan() {
  const openYouTubeLink = link => {
    if (link) {
      Linking.openURL(link);
    } else {
      console.log('Tautan YouTube tidak tersedia.');
    }
  };
  return (
    <View
      style={{
        justifyContent: 'center',
      }}>
      <View>
        <Text
          style={{
            fontSize: 16,
            color: 'gray',
            top: 30,
          }}>
          Contoh Pola Makan Sehat
        </Text>
      </View>
      <View
        style={{
          top: 30,
        }}>
        <FlatList
          horizontal={true}
          data={polamakan}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <View style={{marginRight: 10}}>
              <TouchableOpacity onPress={() => openYouTubeLink(item.link)}>
                <Image
                  source={item.image}
                  style={{
                    height: 200,
                    width: 200,
                    borderRadius: 15,
                  }}
                />

                <Text
                  style={{
                    fontSize: 17,
                    color: '#F9AD2B',
                    fontWeight: 'bold',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}
