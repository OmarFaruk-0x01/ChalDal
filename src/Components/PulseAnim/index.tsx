import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  Pressable,
  SafeAreaView,
} from 'react-native';

import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Colors from '../../Constants/Colors';
const Pulse: React.FC<{repeat: boolean, delay: number}> = ({repeat, delay}) => {
   const animation = useSharedValue(0);
   React.useEffect(() => {
     animation.value = withDelay(
       delay,
       withRepeat(
         withTiming(1, {
           duration: 2000,
           easing: Easing.linear,
         }),
         repeat ? -1 : 1,
         false,
       ),
     );
   }, []);
   const animatedStyles = useAnimatedStyle(() => {
     const opacity = interpolate(
       animation.value,
       [0, 1],
       [0.6, 0],
       Extrapolate.CLAMP,
     );
     return {
       opacity: opacity,
       transform: [{scale: animation.value}],
     };
   });
  return <Animated.View style={[styles.circle, animatedStyles]} />;
};
export default function PulseAnim() {
     const [pulse, setPulse] = React.useState([1,2,3,4]);
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
        }}>
        <Image
          resizeMode="contain"
          style={styles.innerCircle}
          source={require('../../../assets/imgs/egg.png')}
        />

        {pulse.map((item, index) => (
            <Pulse key={index} repeat={true} delay={index*200} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#fffa',
    alignItems: 'center',
    zIndex: 1000,
  },
  circle: {
    width: 300,
    borderRadius: 150,
    height: 300,
    position: 'absolute',
    borderColor: Colors.primary,
    borderWidth: 4,
    backgroundColor: Colors.primary + 'ff'
  },
  innerCircle: {
    width: 100,
    borderRadius: 40,
    height: 100,
    zIndex: 100,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
});
