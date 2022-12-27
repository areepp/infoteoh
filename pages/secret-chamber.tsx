import { useCollectionData } from 'react-firebase-hooks/firestore'
import Header from '../components/Header'
import AdminTryoutList from '../components/Admin/AdminTryoutList'
import * as tryoutService from '../lib/tryout.service'
import AdminSortOption from '../components/Admin/AdminSortOption'
import { useState } from 'react'
import { sortMethods } from '../utils/sortMethods'

const Admin = () => {
  const [value, loading, error] = useCollectionData(
    tryoutService.getAllTryouts(),
  )
  const [sortState, setSortState] = useState<'oldest' | 'newest'>('oldest')

  console.log(value)
  return (
    <div className="min-h-screen bg-canvas">
      <Header title="admin" desc="admin only" />

      <main className="mt-20">
        <AdminSortOption setSortState={setSortState} />
        {value && value.sort((sortMethods as any)[sortState].method) && (
          <div>
            {value.map((data) => (
              <AdminTryoutList {...data} key={data.id} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Admin
