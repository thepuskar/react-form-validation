import './App.css'
import { useForm } from './formValidation'

function App() {
  const onSubmit = (values:any) => {
    console.log('data', values)
  }
  const { state, handleChange, handleSubmit } = useForm(onSubmit)

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input
          value={state.input?.['fullName']}
          onChange={handleChange}
          type='text'
          name='fullName'
          placeholder='Full name'
        />
        <span className='validation-errors'>
          {state.validationErrs?.['fullName']}
        </span>

        <input
          onChange={handleChange}
          value={state.input?.['username']}
          type='text'
          name='username'
          placeholder='Username'
        />

        <input
          onChange={handleChange}
          value={state.input?.['email']}
          type='email'
          name='email'
          placeholder='Email'
        />

        <input
          onChange={handleChange}
          value={state.input?.['password']}
          type='password'
          name='password'
          placeholder='password'
        />

        <button type='submit'>Submut</button>
      </form>
    </div>
  )
}

export default App
