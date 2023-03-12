import { ReactNode } from 'react'

import Default from './default';

import type { StyleProp } from '..'
import type { IconProps } from '../icons'
import type { InputProps } from '../inputs'

export type Errors = {
  required: string
  error: string
  firstName: {
    invalid: string
  }
  lastName: {
    invalid: string
  }
  email: {
    unique: string
    invalid: string
  }
  password: {
    password_too_common: string
    password_entirely_numeric: string
    password_too_short: string
    password_too_similar: string
  }
  phoneNumber: {
    invalid: string
  }
  invalid_credentials: string
}
export type Keys = {
  firstName?: string
  lastName?: string
  email?: string
  phoneNumber?: string
  password?: string
  message?: string
}
export type Props = {
  btnText?: string
  children?: typeof ReactNode
  fields?: string[]
  style?: {
    buttons?: {
      contentStyle?: StyleProp;
      style?: StyleProp;
    };
    container?: StyleProp;
    input?: {
      containerStyle?: StyleProp
      style?: StyleProp
    };
  };
  loading?: boolean
  handler: (data: object) => void
  iconLeft?: InputProps['iconLeft']
  iconRight?: InputProps['iconRight']
}
export type FieldProps = {
  id: keyof Keys
  icon?: IconProps['name']
  label?: string
  validation?: {
    required?: Errors["required"]
    validate?: any
    minLength?: {
      value: number
      message: string
    }
  }
}

export { Default };
