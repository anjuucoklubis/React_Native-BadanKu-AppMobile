import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OnBoardingView = () => {
  const navigation = useNavigation();
  const handleToHome = () => {
    navigation.navigate('MainApp');
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/dev/on-boarding/Group-51.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Let's help you get better!!</Text>
      <Text
        style={{
          fontSize: 17,
          textAlign: 'center',
          bottom: 30,
          color: '#000000',
        }}>
        Aplikasi ini dapat Anda hitung indeks massa tubuh (BMI) Anda. BMI Anda
        dapat membantu Anda menentukan apakah Anda berada pada berat badan yang
        sehat, atau apakah Anda perlu menambah berat badan perubahan pola makan
        atau kebiasaan olahraga Anda.
      </Text>
      <TouchableOpacity onPress={handleToHome}>
        <View
          style={{
            backgroundColor: '#F9AD2B',
            width: 308,
            height: 63,
            borderRadius: 100,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 23,
              textAlign: 'center',
            }}>
            Get Started
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Black',
    color: '#000000',
  },
  descriptionContainer: {
    width: 332,
    height: 123,
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: '#C62FF8',
    borderRadius: 50,
    width: 378,
    height: 83,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default OnBoardingView;
