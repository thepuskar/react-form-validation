import { useForm } from 'hooks'
import { Input } from 'components'

interface User {
  email: string
  password: string
}

export const LoginForm = () => {
  const { handleSubmit, handleChange, data, errors } = useForm<User>({
    validations: {
      password: {
        required: {
          value: true,
          message: 'This field is required'
        },
        custom: {
          isValid: (value) => value?.length > 6,
          message: 'The password needs to be atleast 6 characters long'
        }
      },
      email: {
        required: {
          value: true,
          message: 'Email is required.'
        }
      }
    },
    onSubmit: () => alert('User submitted!')
  })
  return (
    <form onSubmit={handleSubmit}>
      <h1>Dynamic Form validation</h1>
      <input
        type='email'
        placeholder='Email*'
        value={data.email || ''}
        onChange={handleChange('email')}
      />
      {errors?.email && (
        <span className='validation-errors'>{errors?.email}</span>
      )}
      <input
        type='password'
        placeholder='Password*'
        value={data.password || ''}
        onChange={handleChange('password')}
      />
      {errors?.password && (
        <span className='validation-errors'>{errors?.password}</span>
      )}
      <button type='submit'>Login</button>
    </form>
  )
}
