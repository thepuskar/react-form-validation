import { FormEvent } from 'react'

interface IInputProps {
  handleChange: (event: FormEvent<HTMLInputElement>) => void
  state: any
  name: string
  type: string
  placeholder: string
}

export const Input = (props: IInputProps) => {
  return (
    <>
      <input
        onChange={props?.handleChange}
        value={props?.state.input?.[props?.name]}
        type={props?.type}
        name={props?.name}
        placeholder={props?.placeholder}
      />
      <span className='validation-errors'>
        {props?.state.validationErrs?.[props?.name]}
      </span>
    </>
  )
}
