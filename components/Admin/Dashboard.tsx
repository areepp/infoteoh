import * as tryoutService from '../../lib/tryout.service'
import AdminSortOption from '../../components/Admin/AdminSortOption'
import { useState } from 'react'
import { sortMethods } from '../../utils/sortMethods'
import { filterMethods } from '../../utils/filterMethods'
import AdminTryoutList from './AdminTryoutList'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import SignOutBtn from './SignOutBtn'

const Dashboard = () => {
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
    <>
      <SignOutBtn />
      <AdminSortOption
        setFilterState={setFilterState}
        setSortState={setSortState}
      />
      {filteredValue &&
        filteredValue
          .sort((sortMethods as any)[sortState].method)
          .map((data) => <AdminTryoutList {...data} key={data.id} />)}
    </>
  )
}

export default Dashboard
