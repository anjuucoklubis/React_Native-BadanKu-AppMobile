import * as React from 'react';
import {Image, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashView from '../modules/pre-login/splash/SplashView';
import OnBoardingView from '../modules/pre-login/onboarding/OnBoardingView';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeView from '../modules/after-login/home/HomeView';
import AboutView from '../modules/after-login/about/AboutView';
import BmiView from '../modules/after-login/bmi/BmiView';
import ResultBMIView from '../modules/after-login/bmi/ResultBMIView';
import TipsSportView from '../modules/after-login/tipsSport/TipsSportView';
import TipsFoodView from '../modules/after-login/tipsFood/TipsFoodView';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppRouter() {
  const MainApp = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            height: 75,
          },
          tabBarIcon: ({focused}) => {
            let iconName;

            if (route.name === 'Beranda') {
              iconName = focused
                ? require('../assets/dev/bottomIcon/bottomIconHome.png')
                : require('../assets/dev/bottomIcon/bottomIconHomeNotActive.png');
            } else if (route.name === 'BMI') {
              iconName = focused
                ? require('../assets/dev/bottomIcon/bottomIconBMI.png')
                : require('../assets/dev/bottomIcon/bottomIconBMINotActive.png');
            } else if (route.name === 'Tentang Aplikasi') {
              iconName = focused
                ? require('../assets/dev/bottomIcon/bottomIconAbout.png')
                : require('../assets/dev/bottomIcon/bottomIconAboutNotActive.png');
            }

            if (focused) {
              return (
                <Image source={iconName} style={{width: 45, height: 45}} />
              );
            } else {
              return (
                <Image source={iconName} style={{width: 35, height: 35}} />
              );
            }
          },
          tabBarLabel: ({focused}) => {
            const labelStyle = {
              fontSize: focused ? 16 : 13,
              color: focused ? 'orange' : 'gray',
            };

            return <Text style={labelStyle}>{route.name}</Text>;
          },
        })}>
        <Tab.Screen
          name="Beranda"
          component={HomeView}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="BMI"
          component={BmiView}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Tentang Aplikasi"
          component={AboutView}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoardingView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResultBMI"
          component={ResultBMIView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TipsSportView"
          component={TipsSportView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TipsFoodView"
          component={TipsFoodView}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
