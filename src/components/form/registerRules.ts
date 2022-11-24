import { IFormData, FORM_INITIAL_STATE } from 'interface'

export default function validate(values: IFormData) {
  let errors: IFormData = FORM_INITIAL_STATE

  if (!values.fullName) errors.fullName = 'Full name is required'

  if (!values.username) errors.username = 'Username is required'

  if (!values.email) {
    errors.email = 'Email address is required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid'
  }
  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters'
  }
  return errors
}
