import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const useBmiModel = () => {
  const [isWeight, setIsWeight] = useState(50);
  const [isHeight, setIsHeight] = useState(120);
  const [isFixHeight, setIsFixHeight] = useState(isHeight / 100);
  const [isCalculateBMI, setIsCalculateBMI] = useState(isWeight / isFixHeight);
  const navigation = useNavigation();

  const weightAddition = () => {
    setIsWeight(isWeight + 1);
  };

  const weightSubtraction = () => {
    if (isWeight > 0) {
      setIsWeight(isWeight - 1);
    }
  };

  const heightAddition = () => {
    setIsHeight(isHeight + 1);
    console.log(isHeight);
  };

  const heightSubtraction = () => {
    if (isHeight > 0) {
      setIsHeight(isHeight - 1);
      console.log(isHeight);
    }
  };

  const calculateBMI = () => {
    const finalHeight = isHeight / 100;
    const finalBMI = isWeight / (finalHeight * finalHeight);

    let message = '';

    if (finalBMI < 18.5) {
      message = 'underweight';
    } else if (finalBMI >= 18.5 && finalBMI <= 24.9) {
      message = 'normal';
    } else if (finalBMI >= 25 && finalBMI <= 29.9) {
      message = 'overweight';
    } else if (finalBMI >= 30) {
      message = 'obesitas';
    }

    const bmiData = {
      bmiValue: finalBMI,
      weightValue: isWeight,
      heightValue: isHeight,
      messageValue: message,
    };
    navigation.navigate('ResultBMI', bmiData);

    console.log('================');
    console.log('Berat badan = ' + isWeight);
    console.log('Tinggi badan = ' + isHeight);
    console.log('Tinggi badan final = ' + finalHeight);
    console.log('BMI final = ' + finalBMI);
  };

  return {
    isWeight,
    isHeight,
    weightAddition,
    weightSubtraction,
    heightAddition,
    heightSubtraction,
    calculateBMI,
    isFixHeight,
    isCalculateBMI,
  };
};

export default useBmiModel;
