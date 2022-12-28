import { useCollectionData } from 'react-firebase-hooks/firestore'
import Header from '../components/Common/Header'
import AdminTryoutList from '../components/Admin/AdminTryoutList'
import * as tryoutService from '../lib/tryout.service'
import AdminSortOption from '../components/Admin/AdminSortOption'
import { useState } from 'react'
import { sortMethods } from '../utils/sortMethods'
import { filterMethods } from '../utils/filterMethods'

const Admin = () => {
  const [value, loading, error] = useCollectionData(
    tryoutService.getAllTryouts(),
  )
  const [sortState, setSortState] = useState<'oldest' | 'newest'>('oldest')
  const [filterState, setFilterState] = useState<
    'needAction' | 'published' | 'pastDeadline' | 'all'
  >('needAction')

  let filteredValue

  if (value) {
    filteredValue = value.filter((filterMethods as any)[filterState].method)
  }

  return (
    <div className="min-h-screen bg-canvas">
      <Header title="admin" desc="admin only" />

      <main className="mt-20 px-4">
        <AdminSortOption
          setFilterState={setFilterState}
          setSortState={setSortState}
        />
        {filteredValue &&
          filteredValue
            .sort((sortMethods as any)[sortState].method)
            .map((data) => <AdminTryoutList {...data} key={data.id} />)}
      </main>
    </div>
  )
}

// .filter((filterMethods as any)[filterState].method)

export default Admin
