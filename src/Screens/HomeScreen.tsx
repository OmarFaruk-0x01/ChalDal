import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';
import { WebView } from 'react-native-webview';
const HomeScreen: FC<{}> = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
          <WebView
              source={{
                uri:"https://chaldal.com"
            }}
          />
    </SafeAreaView>
  )
};

export default HomeScreen;
