import {DrawerActions, useNavigation, useRoute} from '@react-navigation/native';
import React, {FC, useRef, useState} from 'react';
import {Alert, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import PulseAnim from '../Components/PulseAnim';
import Colors from '../Constants/Colors';
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
  const webRef = useRef();
  const [isLoad, setLoad] = useState(false);
 
  return (
    <SafeAreaView style={{ flex: 1 }} pointerEvents={!isLoad ? 'auto' : 'none'}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.primary} />
      {isLoad && <PulseAnim />}
      {!isLoad && <View style={{ position: 'absolute', width: '100%', backgroundColor: '#0006', top: '50%', zIndex: 10, }}>
        <Text style={{ fontSize: 30, color: '#fff', textAlign: 'center' }}>
          ChalDal Demo App {'\n'}(Web ={'>'} Android/IOS)</Text>
      </View>}
      <WebView
        // @ts-ignore
        ref={REF => (webRef.current = REF)}
        renderLoading={() => <PulseAnim />}
        startInLoadingState={true}
        onError={(ev) => {
          if (ev.nativeEvent.code == -2) {
            Alert.alert("Failure!", "Something went wrong! Please Check Your Internet Connection.", [{
              text: 'Retry', onPress: () => {
                // @ts-ignore
                (webRef && webRef.current.reload());
            }}])
          }
          
        }}
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
