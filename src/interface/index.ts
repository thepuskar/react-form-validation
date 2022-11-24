export enum ACTION_TYPE {
  INPUT_CHANGE = 'INPUT_CHANGE',
  SUBMIT = 'SUBMIT',
  STOP_SUBMIT = 'STOP_SUBMIT'
}
export interface IFormData {
  fullName: string
  username: string
  email: string
  password: string
}

export interface IFORMERROR {
  fullName: string
  username: string
  email: string
  password: string
}

export const FORM_INITIAL_STATE: IFormData = {
  fullName: '',
  username: '',
  email: '',
  password: ''
}

export const INITIAL_FORM_VALIDITY_STATE = {
  fullNameError: '',
  usernameError: '',
  emailError: '',
  passwordError: ''
}

export interface IState {
  [key: string]: string
}

export interface IFormState {
  input: IState
  validationError: IFORMERROR
  isSubmiting?: boolean
}

export interface IValidationErrs {
  fullName: string
  username: string
  email: string
  password: string
}

export interface IPayload {
  [k: string]: string
}

export interface IAction {
  type: ACTION_TYPE
  payload?: IPayload
}
