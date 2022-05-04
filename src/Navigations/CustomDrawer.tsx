import React from 'react';
import {
  DrawerView,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Button from '../Components/Button';
import Catagories, {CategoryType} from '../Constants/Cetagories';
import Colors from '../Constants/Colors';

const CustomDrawer: FC<DrawerContentComponentProps> = props => {
  function renderRecurveList(cetalist: CategoryType[]) {
    return cetalist.map(ceta => (
      <View key={ceta.slug} style={{borderLeftWidth: .2, borderRightColor: '#0000'}}>
        <Button imgUrl={ceta.imgUrl} title={ceta.title} />
        {ceta.children ? <View style={{marginLeft: 20}}>{renderRecurveList(ceta.children)}</View> : null}
      </View>
    ));
  }

  return (
    <DrawerContentScrollView {...props}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          resizeMethod="auto"
          resizeMode="contain"
          style={{width: '80%', height: 200}}
          source={{
            uri: 'https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0+Deploy-Release-25/Default/components/header/Header/images/logo-small.png?q=low&webp=1&alpha=1',
          }}
        />
      </View>
      <Button title="Offers" />
      <Button title="Food Aid" />
      <Button title="Recipes" />
      {renderRecurveList(Catagories)}
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
