import { View } from 'react-native';

import { colors, fontsSizes } from '../../styles/theme';
import { FigureProps } from './';
import styles from './styles';

type Props = FigureProps;

const Circle = ({ children, size, color, borderColor }: Props) => {
  const sized = size ? fontsSizes[size].fontSize : fontsSizes.normal.fontSize;
  return (
    <View
      style={[
        styles.circle,
        {
          backgroundColor: color ? colors[color] : 'transparent',
          borderColor,
          borderWidth: borderColor ? 1 : 0,
          height: sized,
          width: sized,
        },
      ]}>
      {children}
    </View>
  );
};

export default Circle;
