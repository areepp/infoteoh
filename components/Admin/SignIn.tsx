import { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../lib/firebase-client'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signInWithEmailAndPassword, _user, _loading, error] =
    useSignInWithEmailAndPassword(auth)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await signInWithEmailAndPassword(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <h1>You need to sign in to access this page</h1>
      {error && <span>{error.message}</span>}
      <form onSubmit={onSubmit}>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-4 w-full pl-2 p-1 rounded bg-inherit border border-primary focus:outline-none placeholder:text-xs placeholder:text-placeholder"
          type="text"
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-4 w-full pl-2 p-1 rounded bg-inherit border border-primary focus:outline-none placeholder:text-xs placeholder:text-placeholder"
          type="password"
        />
        <button
          className="mt-4 px-3 py-2 text-sm border border-primary rounded"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignIn
