import { useRouter } from 'next/router'
import { useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '../../lib/firebase-client'

const SignOutBtn = () => {
  const router = useRouter()
  const [signOut] = useSignOut(auth)

  const onClick = async () => {
    await signOut()
  }

  return (
    <button
      onClick={onClick}
      className="fixed top-4 right-4 bg-red-600 text-white rounded px-2 py-1 text-xs"
    >
      SignOut
    </button>
  )
}

export default SignOutBtn
