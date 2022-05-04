import React, {FC} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import Colors from '../../Constants/Colors';
import {ButtonProps} from './index.interface';
import Styles from './index.styles';

const Button: FC<ButtonProps> = ({imgUrl, title}) => {
  return (
    <TouchableOpacity
      style={[
        Styles.buttonContainer,
        {
         
        },
      ]}>
      {imgUrl ? (
        <Image
          style={Styles.buttonImg}
          resizeMode="contain"
          source={{uri: imgUrl}}
        />
      ) : null}
      <Text style={Styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
