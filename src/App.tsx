import './App.css'
import { useForm } from './hooks'
import { Input } from './components/Input'

function App() {
  const onSubmit = (values: any) => {
    console.log('data', values)
  }
  const { state, handleChange, handleSubmit } = useForm(onSubmit)

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
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

        <button type='submit'>Submut</button>
      </form>
    </div>
  )
}

export default App
