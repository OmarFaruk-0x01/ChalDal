import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import Button from '../Button';
import {RecursiveListProps} from './index.interface';
const RecursiveList: FC<RecursiveListProps> = ({
  dataList,
  activeRoute,
  setActiveRoute,
  parantTitle,
  ...props
}) => {
  const navigation = useNavigation();
  function onPress(activeRoute: string, slug: string) {
    return () => {
      // @ts-ignore
      navigation.navigate('Home', {slug});
    };
  }

  return (
    <View {...props}>
      {dataList.map(ceta => (
        <View
          key={ceta.slug}
          style={{borderLeftWidth: 0.2, borderRightColor: '#0000'}}>
          <Button
            imgUrl={ceta.imgUrl}
            title={ceta.title}
            showIcon={(ceta.children?.length || 0) > 0}
            active={activeRoute.endsWith(ceta.title)}
            onPress={() => {
              onPress(ceta.title, ceta.slug)();
              setActiveRoute(parantTitle + '***' + ceta.title);
            }}
            onIconPress={() => {}}
          />
          {ceta.children && activeRoute.includes(ceta.title) ? (
            <RecursiveList
              parantTitle={parantTitle + '***' + ceta.title}
              dataList={ceta.children}
              style={{marginLeft: 20}}
              activeRoute={activeRoute}
              setActiveRoute={setActiveRoute}
              {...props}
            />
          ) : null}
        </View>
      ))}
    </View>
  );
};
export default RecursiveList;
