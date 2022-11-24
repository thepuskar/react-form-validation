import { IFormState, IValidationErrs } from 'interface'

export const validateOnSubmit = (state: IFormState): IValidationErrs => {
  const { input } = state
  let validationErrs: IValidationErrs = {
    fullName: '',
    username: '',
    email: '',
    password: ''
  }
  if (!input.fullName) validationErrs.fullName = 'Full name is required'

  if (!input.username) validationErrs.username = 'Username is required'

  if (!input.email) validationErrs.email = 'Email is required'
  else if (!/\S+@\S+\.\S+/.test(input.email))
    validationErrs.email = 'Should be an email'

  if (!input.password) validationErrs.password = 'Password is required'
  else if (input.password.length < 10)
    validationErrs.password = 'Password must be at least 10 characters'

  return validationErrs
}
