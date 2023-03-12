const isEmail = (email: string) =>
  /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/g.test(
    email
  )

const containLetter = (password: string) => /[a-zA-Z]/g.test(password)

const checkName = (name: string) => /^[a-zA-Z\s]*$/.test(name)

const containNumber = (password: string) => /\d/.test(password)

const constainSpecialCharacters = (name: string) =>
  /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>?~]/.test(name)

export {
  isEmail,
  containLetter,
  containNumber,
  constainSpecialCharacters,
  checkName,
}
