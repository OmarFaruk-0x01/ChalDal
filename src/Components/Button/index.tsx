import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../Constants/Colors';
import {ButtonProps} from './index.interface';
import Styles from './index.styles';
import {IconFill} from '@ant-design/icons-react-native';

const Button: FC<ButtonProps> = ({imgUrl, title, active, showIcon, onIconPress, ...props}) => {
  return (
    <TouchableOpacity
      style={[
        Styles.buttonContainer,
        {
          backgroundColor: active ? `${Colors.primary}7f` : '#fff',
        },
      ]}
      {...props}>
      <View style={{flexDirection: 'row'}}>
        {imgUrl ? (
          <Image
            style={Styles.buttonImg}
            resizeMode="contain"
            source={{uri: imgUrl}}
          />
        ) : null}
        <Text style={Styles.buttonTitle}>{title}</Text>
      </View>
      {showIcon ? (
        <IconFill
          onPress={onIconPress}
          name={active ? 'down-circle' : 'right-circle'}
          size={22}
          color={Colors.primary + 'ff'}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default Button;
