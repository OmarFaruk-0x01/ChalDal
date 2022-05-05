import React, { useState } from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {FC} from 'react';
import {Alert, Image, Linking, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Button from '../Components/Button';
import Catagories, {CategoryType} from '../Constants/Cetagories';
import Colors from '../Constants/Colors';
import RecursiveList from '../Components/RecursiveList';
import { IconFill } from '@ant-design/icons-react-native';

const CustomDrawer: FC<DrawerContentComponentProps> = props => {
  const [activeRoute, setActiveRoute] = useState<string>('Home');
  const [modalVisible, setModalVisible] = useState(false);
  const {navigation} = props
  function onPress(activeRoute:string,slug: string) {
    
    return () => { setActiveRoute(activeRoute); navigation.navigate('Home', { slug }); }
  }
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
      <Button
        title="Home"
        active={activeRoute == 'Home'}
        onPress={onPress('Home', '/')}
      />
      <Button
        title="Offers"
        active={activeRoute == 'Offers'}
        onPress={onPress('Offers', '/offers')}
      />
      <Button
        title="Food Aid"
        active={activeRoute == 'Food Aid'}
        onPress={onPress('Food Aid', '/donation')}
      />
      <Button
        title="Recipes"
        active={activeRoute == 'Recipes'}
        onPress={onPress('Recipes', '/recipes')}
      />
      <RecursiveList
        parantTitle={''}
        dataList={Catagories}
        activeRoute={activeRoute}
        setActiveRoute={setActiveRoute}
      />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  marginVertical: 10,
                  color: Colors.black,
                }}>
                About Developer
              </Text>
              <View style={{flexDirection: 'row', marginBottom: 5}}>
                <Text style={styles.modalText}>Name: </Text>
                <Text style={styles.modalText}>Omar Faruk</Text>
              </View>
              <View style={{flexDirection: 'row', marginBottom: 5}}>
                <Text style={styles.modalText}>
                  I believe that a person should work on developing their
                  professional skills and learning new things all the time.
                  Currently, I am looking for new career opportunities my
                  current job position cannot provide. I have enough experience
                  to occupy a developer position and I will be glad to work on
                  building Eye-catching Apps.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginBottom: 5,
                }}>
                <Image
                  style={{width: 20, height: 20, marginRight: 6}}
                  resizeMode={'contain'}
                  source={require('../../assets/imgs/gmail.png')}
                />
                <Text
                  style={[styles.modalText, {color: Colors.primary}]}
                  onPress={() => {
                    Linking.openURL(
                      'mailto:programmer.omar.dev@gmail.com?subject=Proposal a project',
                    );
                  }}>
                  programmer.omar.dev@gmail.com
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginBottom: 5,
                }}>
                <Image
                  style={{width: 20, height: 20, marginRight: 6}}
                  resizeMode={'contain'}
                  source={require('../../assets/imgs/linkedin.png')}
                />
                <Text
                  style={[styles.modalText, {color: Colors.primary}]}
                  onPress={() => {
                    Linking.openURL(
                      'https://www.linkedin.com/in/omar-faruk-613874226/',
                    );
                  }}>
                  @Omar Faruk
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginBottom: 5,
                }}>
                <Image
                  style={{width: 20, height: 20, marginRight: 6}}
                  resizeMode={'contain'}
                  source={require('../../assets/imgs/github.png')}
                />
                <Text
                  style={[styles.modalText, {color: Colors.primary}]}
                  onPress={() => {
                    Linking.openURL('https://github.com/OmarFaruk-0x01/');
                  }}>
                  @OmarFaruk-0x01
                </Text>
              </View>

              <Pressable
                style={[{position: 'absolute', right: -10, top: -10}]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={[
                    styles.textStyle,
                    {backgroundColor: '#fff', borderRadius: 50},
                  ]}>
                  <IconFill
                    name="close-circle"
                    size={30}
                    color={Colors.primary}
                  />
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Button
          title="About Developer"
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    // width: '70%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalText: {
    
    color: Colors.black,
  },
});