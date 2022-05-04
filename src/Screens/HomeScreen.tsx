import { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {WebView} from 'react-native-webview';
const InjectJavaScript = `
(function() {
  document.querySelector('.topMenu.vertical').children[0].dataset.reactid = 0
  document.querySelector("div.hamBergerMenuIcon").addEventListener('click', function(){
    window.ReactNativeWebView.postMessage(JSON.stringify({isNavOpen : true}));
    document.querySelector("button.hamburgerMenu").classList.remove('change');
  });
  document.querySelector(".topMenu").style.backgroundColor = 'transparent';
  document.querySelector("div.menu").style.opacity = 0; 
  document.querySelector("div.openMenuShadowDrop").style.display = 'none'; 
  document.body.style.userSelect = 'none';
})();


`;

const HomeScreen: FC<{}> = () => {
  const nav = useNavigation()
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        injectedJavaScript={InjectJavaScript}
        source={{
          uri: 'https://chaldal.com',
        }}
        onMessage={ev => {
          const nvData = ev.nativeEvent.data;
          const data = JSON.parse(nvData);
          if (data.isNavOpen) {
            nav.dispatch(DrawerActions.openDrawer())
          }
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
