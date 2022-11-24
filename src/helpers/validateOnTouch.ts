import { IFormState, IAction, IPayload } from 'interface'

export const validateOnTouch = (
  state: IFormState,
  action: IAction
): IPayload => {
  let validationErr: IPayload = {}
  for (let keyName in action?.payload) {
    if (
      state.input[keyName].length > 0 &&
      action?.payload?.[keyName]?.length === 0
    )
      validationErr[keyName] = 'This field is required'
    if (
      state.input[keyName].length === 0 &&
      action?.payload?.[keyName]?.length > 0
    )
      validationErr[keyName] = ''
  }
  return validationErr
}
