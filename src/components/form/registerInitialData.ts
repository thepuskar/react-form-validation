import { ACTION_TYPE, IFormData, IFormState } from 'interface'

export const FORM_INITIAL_STATE: IFormData = {
  fullName: '',
  username: '',
  email: '',
  password: ''
}

export const initState: IFormState = {
  input: {
    fullName: '',
    username: '',
    email: '',
    password: ''
  },
  validationError: {
    fullName: '',
    username: '',
    email: '',
    password: ''
  },
  isSubmiting: false
}
