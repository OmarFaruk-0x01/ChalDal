
import {TouchableOpacityProps as RNButtonProps} from 'react-native'
export interface ButtonProps extends RNButtonProps {
    imgUrl?: string;
    title: string;
}