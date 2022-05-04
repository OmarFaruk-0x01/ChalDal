import React, { useState } from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Button from '../Components/Button';
import Catagories, {CategoryType} from '../Constants/Cetagories';
import Colors from '../Constants/Colors';
import RecursiveList from '../Components/RecursiveList';

const CustomDrawer: FC<DrawerContentComponentProps> = props => {
  const [activeRoute, setActiveRoute] = useState<string>('Home');
  console.log(activeRoute);
  
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: 5,
          backgroundColor: Colors.primary,
          borderRadius: 10,
        }}>
        <Image
          resizeMethod="auto"
          resizeMode="contain"
          style={{width: '80%', height: 200}}
          source={{
            uri: 'https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0+Deploy-Release-25/Default/components/header/Header/images/logo-small.png?q=low&webp=1&alpha=1',
          }}
        />
      </View>
      <Button title="Home" active={activeRoute == 'Home'} />
      <Button title="Offers" active={activeRoute == 'Offers'} />
      <Button title="Food Aid" active={activeRoute == 'Food Aid'} />
      <Button title="Recipes" active={activeRoute == 'Recipes'} />
      <RecursiveList parantTitle={''} dataList={Catagories} activeRoute={activeRoute} setActiveRoute={setActiveRoute} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
