import { useReducer, useEffect, FormEvent, ChangeEvent } from 'react'

import { validateOnSubmit, validateOnTouch } from 'helpers'
import { ACTION_TYPE, IFormData, IFormState, IAction } from 'interface'

const initState: IFormState = {
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

export const useStaticForm = (callback: any) => {
  const reducer = (state: IFormState, action: IAction): IFormState => {
    switch (action?.type) {
      case ACTION_TYPE?.INPUT_CHANGE:
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
      case ACTION_TYPE?.SUBMIT:
        return {
          ...state,
          validationError: {
            ...validateOnSubmit(state)
          },
          isSubmiting: true
        }
      case ACTION_TYPE?.STOP_SUBMIT:
        return {
          ...state,
          isSubmiting: false
        }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer<
    (state: IFormState, action: IAction) => IFormState
  >(reducer, initState)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ACTION_TYPE?.INPUT_CHANGE,
      payload: { [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: ACTION_TYPE?.SUBMIT })
  }

  useEffect(() => {
    const validateErrs = state?.validationError || {}
    if (
      Object?.values(validateErrs)?.find((err: any) => err.length) &&
      state?.isSubmiting
    )
      dispatch({ type: ACTION_TYPE?.STOP_SUBMIT })
    if (
      !Object?.values(validateErrs)?.find((err: any) => err.length) &&
      state?.isSubmiting
    )
      callback(state?.input)
  }, [state.isSubmiting])

  return { state, handleChange, handleSubmit }
}
