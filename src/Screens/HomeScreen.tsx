import {DrawerActions, useNavigation, useRoute} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import PulseAnim from '../Components/PulseAnim';
const InjectJavaScript = `
(function() {
  document.querySelector('.topMenu.vertical').children[0].dataset.reactid = 0
  document.querySelector("button.start_shopping_btn").dataset.reactid = 0
  document.querySelector("div.hamBergerMenuIcon").addEventListener('click', function(){
    window.ReactNativeWebView.postMessage(JSON.stringify({isNavOpen : true}));
    document.querySelector("button.hamburgerMenu").classList.remove('change');
  });
  document.querySelector("button.start_shopping_btn").addEventListener('click', function(){
    window.ReactNativeWebView.postMessage(JSON.stringify({isNavOpen : true}));
    document.querySelector("button.hamburgerMenu").classList.remove('change');
  });
  document.querySelector(".topMenu").style.backgroundColor = 'transparent';
  document.querySelector("div.menu").style.opacity = 0; 
  document.querySelector(".menuWrapper").style.boxShadow = '';
  document.querySelector("div.openMenuShadowDrop").style.display = 'none'; 
  document.body.style.userSelect = 'none';
  window.ReactNativeWebView.postMessage(JSON.stringify({contentLoad : true}));
})();


`;

const HomeScreen: FC<{}> = () => {
  const nav = useNavigation();
  const route = useRoute();
  const [isLoad, setLoad] = useState(false);
 
  return (
    <SafeAreaView style={{flex: 1}} pointerEvents={!isLoad ? 'auto' : 'none'}>
      {isLoad && <PulseAnim />}
      <WebView
        renderLoading={() => <PulseAnim />}
        startInLoadingState={true}
        injectedJavaScript={InjectJavaScript}
        source={{
          uri:
            'https://chaldal.com' +
            // @ts-ignore
            (route.params?.slug ? route.params.slug : '/'),
        }}
        onLoadStart={() => {
          setLoad(true);
        }}
        onMessage={ev => {
          const nvData = ev.nativeEvent.data;
          const data = JSON.parse(nvData);
          if (data.contentLoad) {
            console.log(data);

            setLoad(false);
          }
          if (data.isNavOpen) {
            nav.dispatch(DrawerActions.openDrawer());
          }
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
