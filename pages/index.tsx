import Footer from '../components/Common/Footer'
import Header from '../components/Common/Header'
import TryoutList from '../components/Index/TryoutList'
import SortOption from '../components/Index/SortOption'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import * as tryoutService from '../lib/tryout.service'
import { useState } from 'react'
import { sortMethods } from '../utils/sortMethods'
import { isInThePast, isMoreThanAMonthAgo } from '../utils/dateHelper'
import { ITryout } from '../lib/tryout.service'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import Spinner from '../components/Common/Spinner'
import Head from 'next/head'

const Home = () => {
  const [value, loading, error] = useCollectionData(
    tryoutService.getPublishedTryouts(),
  )
  const [sortState, setSortState] = useState<
    'pendaftaranTerdekat' | 'pengerjaanTerdekat'
  >('pendaftaranTerdekat')
  const [pastTryoutsVisible, setPastTryoutsVisible] = useState(false)

  // remove past tryouts
  let filteredTryouts: ITryout[] | undefined = value?.filter(
    (tryout) => !isInThePast(new Date(tryout.akhirPendaftaran)),
  )

  // past tryouts (max one month ago)
  let pastTryouts: ITryout[] | undefined = value?.filter((tryout) => {
    const akhirPendaftaranDate = new Date(tryout.akhirPendaftaran)
    if (isInThePast(akhirPendaftaranDate)) {
      if (isMoreThanAMonthAgo(akhirPendaftaranDate)) return false
      return true
    }
    return false
  })

  return (
    <>
      <Head>
        <title>infoteoh | info TO SNBT gratis</title>
        <meta
          name="description"
          content="infoteoh merupakan website yang menyediakan informasi tryout-tryout SNBT gratis."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google" content="notranslate" key="notranslate" />
      </Head>
      <div className="bg-canvas min-h-screen">
        <div className="container mx-auto lg:px-16">
          <Header
            title="infoteoh"
            desc="Website buat para klean yang pengen nyari info TO SNBT gratis."
            indexPage
          />
          {/* BODY */}
          <main className="mt-20 md:mt-10 px-4">
            <SortOption setSortState={setSortState} />
            {/* LIST TO */}
            {loading && (
              <div className="">
                <Spinner />
              </div>
            )}
            {filteredTryouts && (
              <div className="">
                {filteredTryouts
                  .sort((sortMethods as any)[sortState].method)
                  .map((data) => (
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
            <button
              onClick={() => setPastTryoutsVisible(!pastTryoutsVisible)}
              className=" mt-4 flex items-center text-placeholder"
            >
              <span>Terlewat</span>{' '}
              {pastTryoutsVisible ? (
                <MdKeyboardArrowUp />
              ) : (
                <MdKeyboardArrowDown />
              )}
            </button>
            {pastTryoutsVisible && (
              <div className="">
                {pastTryouts &&
                  pastTryouts
                    .sort((sortMethods as any)[sortState].method)
                    .map((data) => (
                      <TryoutList
                        key={data.id}
                        penyelenggara={data.penyelenggara}
                        mulaiPendaftaran={data.mulaiPendaftaran}
                        akhirPendaftaran={data.akhirPendaftaran}
                        mulaiPengerjaan={data.mulaiPengerjaan}
                        akhirPengerjaan={data.akhirPengerjaan}
                        link={data.link}
                        isPast
                      />
                    ))}
                <div className="">
                  <span className="text-xs text-placeholder">
                    range terlewat satu bulan yang lalu
                  </span>
                </div>
              </div>
            )}
          </main>
          {!loading && <Footer />}
        </div>
      </div>
    </>
  )
}

export default Home
