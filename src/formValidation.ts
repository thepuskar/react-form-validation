import { useReducer, useEffect } from 'react'

interface IFormData {
  fullName: string
  username: string
  email: string
  password: string
}
interface IFORMERROR {
  fullNameError: boolean
  usernameError: boolean
  emailError: boolean
  passwordError: boolean
}

interface IFormAction {
  type: any
}
interface IFormValidityAction {
  type: string
  payLoad: IFormData
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

export const formReducer = (
  state: IFormData,
  action: IFormAction
): IFormData => {
  const { name, value } = action.type
  return {
    ...state,
    [name]: value
  }
}

export const useForm = (callback: any) => {
  const INITIAL_STATE = {
    input: FORM_INITIAL_STATE,
    validationError: INITIAL_FORM_VALIDITY_STATE,
    isSubmiting: false
  }
  //reducer
  const formReducer = (state: any, action: any) => {
    switch (action?.type) {
      case 'INPUT_CHANGE':
        return {
          ...state,
          input: {
            ...state?.input,
            ...action?.payload
          },
          validationError: {
            ...state?.validationError,
            ...validateOnTouch(state, action)
          }
        }
      case 'SUBMIT':
        return {
          ...state,
          validationErrs: {
            fullName: '',
            username: '',
            email: '',
            password: '',
            ...validateOnSubmit(state)
          },
          isSubmiting: true
        }
      case 'STOP_SUBMIT':
        return {
          ...state,
          isSubmiting: false
        }
      default:
        break
    }
  }

  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE)

  const handleChange = (e: any) => {
    dispatch({
      type: 'INPUT_CHANGE',
      payload: { [e.target.name]: e.target.value }
    })
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch({ type: 'SUBMIT' })
  }
  useEffect(() => {
    const validateErrs = state?.validateErrs || {}
    if (
      Object?.values(validateErrs)?.find((err: any) => err.length) &&
      state?.isSubmiting
    )
      dispatch({ type: 'STOP_SUBMIT' })
    if (
      !Object?.values(validateErrs)?.find((err: any) => err.length) &&
      state?.isSubmiting
    )
      callback(state?.input)
  }, [state.isSubmiting])

  return { state, handleChange, handleSubmit }
}

interface IValidationErrs {
  fullName: string
  username: string
  email: string
  password: string
}

function validateOnSubmit(state: any) {
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

interface ITouch {
  [key: string]: string
}

function validateOnTouch(state: any, action: any) {
  let validationErr: ITouch = {}
  for (let keyName in action.payload) {
    if (state.input[keyName].length > 0 && action.payload[keyName].length === 0)
      validationErr[keyName] = 'This field is required'
    if (state.input[keyName].length === 0 && action.payload[keyName].length > 0)
      validationErr[keyName] = ''
  }
  return validationErr
}
