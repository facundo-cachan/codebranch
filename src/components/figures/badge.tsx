import { Text, View } from 'react-native';

import { colors, fontsSizes } from '../../styles/theme';
import { FigureProps } from './';
import styles from './styles';

type Props = FigureProps & {
  badge?: number;
};

const Badge = ({
  children,
  badge,
  size,
  color = 'purple900',
  borderColor,
}: Props) => {
  const sized = size ? fontsSizes[size].fontSize : fontsSizes.biggest.fontSize;
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'flex-end',
      }}>
      <View
        style={[
          styles.circle,
          {
            backgroundColor: colors[color],
            borderColor,
            borderWidth: borderColor ? 1 : 0,
            height: sized,
            position: 'absolute',
            right: -3,
            top: -3,
            width: sized,
            zIndex: 2,
          },
        ]}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          {badge}
        </Text>
      </View>
      {children}
    </View>
  );
};

export default Badge;
