import { Image } from 'react-native'

import logo from '@assets/img/Logo.png'

import { hp, wp } from '@utils/_dimensions'

import type { ImageProps } from './'

const Default = ({
  style,
  source,
  height = 55,
  width = 55,
  ...props
}: ImageProps) => (
  <Image
    {...props}
    style={[{ height: hp(height), width: wp(width) }, style]}
    source={source || logo}
    defaultSource={logo}
  />
);

export default Default;
