import { useColorScheme, TextInput, View } from 'react-native'

import { Icons, Texts } from '@components/'
import { colors } from '@styles/theme'
import styles from './styles'

import type { InputProps } from '.'
import type { StyleProp } from '..'

export interface Props extends InputProps {
  label?: string
  containerStyle?: StyleProp
}

const InputIcon = ({
  value,
  iconLeft,
  iconRight,
  placeholder,
  style,
  onBlur,
  onChangeText,
  label,
  containerStyle,
  errorStyle,
  error,
  secureTextEntry,
}: Props): JSX.Element => {
  const scheme = useColorScheme()
  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Texts.Default
          style={{
            color: style?.color,
            ...styles.label,
            ...style,
          }}
          text={label}
        />
      )}
      <View style={[styles.textInput, style]}>
        {iconLeft && <Icons.FontAwesome5 {...iconLeft} />}
        <TextInput
          value={value}
          style={[
            styles.valueStyle,
            { color: colors[scheme === 'dark' ? 'secondary' : 'primary'], },
            style
          ]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
        />
        {iconRight && <Icons.FontAwesome5 {...iconRight} />}
      </View>
      {error && (
        <Texts.Default
          style={{ color: style?.color, ...errorStyle }}
          text={error}
        />
      )}
    </View>
  )
}

export default InputIcon
