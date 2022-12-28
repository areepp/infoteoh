import Header from '../components/Common/Header'
import SignIn from '../components/Admin/SignIn'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../lib/firebase-client'
import Dashboard from '../components/Admin/Dashboard'

const Admin = () => {
  const [user, loading] = useAuthState(auth)

  return (
    <div className="min-h-screen bg-canvas">
      {loading && <span>loading...</span>}
      <Header title="admin" desc="admin only" />
      <main className="mt-20 px-4">{user ? <Dashboard /> : <SignIn />}</main>
    </div>
  )
}

// .filter((filterMethods as any)[filterState].method)

export default Admin
