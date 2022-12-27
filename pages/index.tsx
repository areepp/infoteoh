import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TryoutList from '../components/Index/TryoutList'
import SortOption from '../components/Index/SortOption'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import * as tryoutService from '../lib/tryout.service'
import { useState } from 'react'
import { sortMethods } from '../utils/sortMethods'

const Home = () => {
  const [value, loading, error] = useCollectionData(
    tryoutService.getPublishedTryouts(),
  )
  const [sortState, setSortState] = useState<
    'pendaftaranTerdekat' | 'pengerjaanTerdekat'
  >('pendaftaranTerdekat')

  return (
    <div className="bg-canvas min-h-screen">
      <Header
        title="infoteoh"
        desc="Website buat para klean yang pengen nyari info TO gratis."
        indexPage
      />

      {/* BODY */}
      <main className="mt-20">
        <SortOption setSortState={setSortState} />
        {/* LIST TO */}
        {loading && <span>loading...</span>}
        {value && (
          <div>
            {value.sort((sortMethods as any)[sortState].method).map((data) => (
              <TryoutList
                key={data.id}
                penyelenggara={data.penyelenggara}
                mulaiPendaftaran={data.mulaiPendaftaran}
                akhirPendaftaran={data.akhirPendaftaran}
                mulaiPengerjaan={data.mulaiPengerjaan}
                akhirPengerjaan={data.akhirPengerjaan}
                link={data.link}
              />
            ))}
          </div>
        )}

        <p className="p-4">
          Ikut berkontribusi dengan menambahkan info try-out yang belum ada di
          list,{' '}
          <Link className="underline" href="/tambah-tryout">
            di sini
          </Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default Home
