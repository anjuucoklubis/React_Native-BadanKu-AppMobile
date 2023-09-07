import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootParamList} from './NavigationTypes';

type SplashViewProps = {
  navigation: NavigationProp<RootParamList>;
};

const SplashView: React.FC<SplashViewProps> = ({navigation}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'OnBoarding'}],
      });
    }, 5000);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View
      style={{
        alignContent: 'center',
        marginTop: 230,
      }}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <Text
          style={{
            color: '#F9AD2B',
            fontSize: 35,
            fontWeight: 'bold',
          }}>
          BadanKu
        </Text>
        <Image
          style={{
            resizeMode: 'contain',
            width: 200,
            height: 200,
            alignItems: 'center',
          }}
          source={require('../../../assets/main/logo.png')}
        />
      </View>
    </View>
  );
};
export default SplashView;
