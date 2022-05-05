import 'react-native-gesture-handler';
import React, {FC, ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './src/Screens/HomeScreen';
import CustomDrawer from './src/Navigations/CustomDrawer';
const StackNav = createNativeStackNavigator();
const DrawerNav = createDrawerNavigator();

const DrawerNavScreens: FC<{}> = () => {
  return (
    <DrawerNav.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      <DrawerNav.Screen name="Home" component={HomeScreen} />
    </DrawerNav.Navigator>
  );
};

const App: React.FC<{}> = () => {
  return (
    <NavigationContainer>
      <StackNav.Navigator screenOptions={{headerShown: false}}>
        <StackNav.Screen name="main" component={DrawerNavScreens} />
      
      </StackNav.Navigator>
    </NavigationContainer>
  );
};

export default App;
