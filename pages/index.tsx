import Link from 'next/link'
import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TryoutList from '../components/Index/TryoutList'
import { BiSortAlt2 } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import SortOption from '../components/Index/SortOption'

const data = [
  {
    title: 'Pahamify #33',
    pendaftaran: 'Pendaftaran 3-7 Januari 2023',
    pengerjaan: 'Pengerjaan 31 - 37 Desember 2022',
    linkedPost: '#',
  },
  {
    title: 'Zenius #156',
    pendaftaran: 'Pendaftaran 3-7 Januari 2023',
    pengerjaan: 'Pengerjaan 31 - 37 Desember 2022',
    linkedPost: '#',
  },
  {
    title: 'Ruangguru #78',
    pendaftaran: 'Pendaftaran 3-7 Januari 2023',
    pengerjaan: 'Pengerjaan 31 - 37 Desember 2022',
    linkedPost: '#',
  },
  {
    title: 'Eduka',
    pendaftaran: 'Pendaftaran 3-7 Januari 2023',
    pengerjaan: 'Pengerjaan 31 - 37 Desember 2022',
    linkedPost: '#',
  },
  {
    title: 'Lah kok TO CPNS',
    pendaftaran: 'Pendaftaran 3-7 Januari 2023',
    pengerjaan: 'Pengerjaan 31 - 37 Desember 2022',
    linkedPost: '#',
  },
]

const Home = () => {
  return (
    <div className="bg-canvas min-h-screen">
      <Header
        title="infoteoh"
        desc="Website buat para klean yang pengen nyari info TO gratis."
        indexPage
      />

      {/* BODY */}
      <main className="mt-20">
        <SortOption />
        {/* LIST TO */}
        <div>
          {data.map((data) => (
            <TryoutList {...data} key={data.title} />
          ))}
        </div>

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
