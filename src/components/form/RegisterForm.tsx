import { useStaticForm } from 'hooks'
import { Input } from 'components'
import { IFormData } from 'interface'

export const RegisterForm = () => {
  const onSubmit = (values: IFormData) => {
    console.log('data', values)
  }
  const { state, handleChange, handleSubmit } = useStaticForm(onSubmit)
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <Input
        handleChange={handleChange}
        type='text'
        name='fullName'
        placeholder='Full name'
        state={state}
      />

      <Input
        handleChange={handleChange}
        type='text'
        name='username'
        placeholder='Username'
        state={state}
      />

      <Input
        handleChange={handleChange}
        type='email'
        name='email'
        placeholder='Email'
        state={state}
      />

      <Input
        handleChange={handleChange}
        type='password'
        name='password'
        placeholder='password'
        state={state}
      />

      <button type='submit'>Submit</button>
    </form>
  )
}
