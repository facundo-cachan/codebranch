import { View } from 'react-native'

import { colors } from '@styles/theme'

import type { CardsProps } from './'

type Props = CardsProps;

const BorderRounded = ({ children, style, ...props }: Props) => (
  <View
    style={[
      {
        borderColor: colors.primary,
        borderRadius: 10,
        borderWidth: 1,
        margin: 10,
      },
      style?.card,
    ]}
    {...props}>
    {children}
  </View>
);

export default BorderRounded;
