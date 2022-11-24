import { ChangeEvent } from 'react'

interface IInputProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  state: any
  name: string
  type: string
  placeholder: string
}

export const Input = (props: IInputProps) => {
  console.log(props?.state)
  return (
    <div className='input-field'>
      <input
        onChange={props?.handleChange}
        value={props?.state.input?.[props?.name]}
        type={props?.type}
        name={props?.name}
        placeholder={props?.placeholder}
      />
      <span className='validation-errors'>
        {props?.state.validationError?.[props?.name]}
      </span>
    </div>
  )
}
