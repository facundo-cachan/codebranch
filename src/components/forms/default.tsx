import { useState } from 'react'
import { Text, View } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { faAt, faKey, faQuestion } from '@fortawesome/free-solid-svg-icons'
import {
  faEye,
  faEyeSlash,
} from '@fortawesome/free-regular-svg-icons'

import { Buttons, Inputs, Texts } from '@components'

import { containNumber, constainSpecialCharacters, checkName, isEmail } from '@utils/_regExp'

import type { Errors, Keys, Props, FieldProps } from '.'
import { height } from '@utils'

export const ErrorsCatalog: Errors = {
  required: "Campo obligatorio.",
  error: "Ocurrió un error.",
  firstName: {
    invalid: "El campo solo puede contener letras.",
  },
  lastName: {
    invalid: "El campo solo puede contener letras.",
  },
  email: {
    unique: "El email ya se encuentra utilizado.",
    invalid: "Ingrese un email válido.",
  },
  password: {
    password_too_common: "La contraseña es muy común.",
    password_entirely_numeric: "La contraseña debe contener números y letras.",
    password_too_short: "Tu contraseña deberá tener al menos 8 caractéres.",
    password_too_similar: "Tu contraseña no debe incluir partes de tu nombre o email.",
  },
  phoneNumber: {
    invalid: "Ingrese un número de teléfono válido.",
  },
  invalid_credentials: "Credenciales inválidas.",
}

const required: Errors["required"] = ErrorsCatalog?.required
const defaultsFields: Array<FieldProps> = [
  {
    id: "firstName",
    label: "Nombre",
    validation: {
      required,
      validate: {
        pattern: (value: string) => (checkName(value) && !constainSpecialCharacters(value)) || ErrorsCatalog.firstName.invalid,
      },
    },
  },
  {
    id: "lastName",
    label: "Apellidos",
    validation: {
      required,
      validate: {
        pattern: (value: string) => (checkName(value) && !constainSpecialCharacters(value)) || ErrorsCatalog.lastName.invalid,
      },
    },
  },
  {
    id: "email",
    icon: faAt,
    label: "Email",
    validation: {
      required,
      validate: {
        pattern: (value: string) => isEmail(value) || "Ingrese un email válido.",
      },
    },
  },
  {
    id: "phoneNumber",
    label: "Telefono Movil",
    validation: {
      required,
      minLength: {
        value: 10,
        message: ErrorsCatalog.phoneNumber.invalid,
      },
      validate: {
        pattern: (value: string) => containNumber(value) || ErrorsCatalog.phoneNumber.invalid,
      },
    },
  },
  {
    id: "password",
    label: "Contraseña",
    validation: {
      required,
      minLength: {
        value: 8,
        message: ErrorsCatalog.password.password_too_common,
      },
      validate: {
        pattern: (value: string) => containNumber(value) || ErrorsCatalog.password.password_too_common,
      },
    },
  },
  {
    id: "message",
    label: "Mensaje (opcional)",
  },
]

const Default = ({
  btnText,
  children,
  style,
  loading = false,
  handler,
  fields,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false)
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    shouldUseNativeValidation: true,
  })
  return (
    <View style={style?.container}>
      {fields?.map((field: string) => {
        const { icon, label, validation } = defaultsFields.find((fields) => fields.id === field) as FieldProps
        return (<Controller
          key={field}
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { name } }) => (
            <Inputs.Icon
              placeholder={name}
              key={field}
              aria-describedby={label}
              secureTextEntry={field === "password" && showPassword}
              style={style?.input?.style}
              containerStyle={style?.input?.containerStyle}
              iconRight={
                field === "password" ? {
                  name: showPassword ? faEyeSlash : faEye, onPress: () => setShowPassword(!showPassword)
                }
                  :
                  { name: icon ?? faQuestion }
              }
            />
          )}
          name={label as string}
        />)
      }
      )}
      {/* fields?.map((field: string) => {
        const { icon, label, validation } = defaultsFields.find((fields) => fields.id === field) as FieldProps
        return (
          <Inputs.Icon
            placeholder={label as string}
            key={field}
            aria-describedby={label}
            secureTextEntry={field === "password" && showPassword}
            style={style?.input?.style}
            containerStyle={style?.input?.containerStyle}
            iconRight={
              field === "password" ? {
                name: showPassword ? faEyeSlash : faEye, onPress: () => setShowPassword(!showPassword)
              }
                :
                { name: icon ?? faQuestion }
            }
            {...register(field, {
              ...validation,
              onChange: (event) => {
                console.log(event);
                ["email", "password"].includes(field) && setValue(field, field)
              },
            })}
          />
        )
      }) */}
      {children}
      {/* <Buttons.Simple
        onPress={handleSubmit(handler)}
        title={btnText || "ENVIAR"}
        disabled={loading}
        loading={loading}
        contentStyle={style?.buttons?.contentStyle}
        size="small"
        style={style?.buttons?.style}
      /> */}
    </View>
  )
}

export default Default
