import * as Buttons from './buttons'
import * as Cards from './cards'
import * as Icons from './icons'
import * as Images from './image'
import * as Inputs from './inputs'
import * as Loaders from './loaders'
import * as ScrollView from './scrollView'
import * as Texts from './texts'

import type { TextStyle, ViewStyle } from 'react-native'
import type { ThemeProps } from '../styles/theme'

const sizeCommon = 'normal',
  colorCommon = 'primary';

export {
  Buttons,
  Cards,
  Icons,
  Images,
  Inputs,
  Loaders,
  ScrollView,
  Texts, colorCommon, sizeCommon
}

export type StyleProp = ViewStyle & TextStyle & {
  color?: ThemeProps['color'] | undefined;
  size?: ThemeProps['size'] | undefined;
};
