import TryoutList from '../components/Index/TryoutList'

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

const Admin = () => {
  return (
    <div className="min-h-screen bg-canvas">
      <header className="p-4">
        <h1 className="text-4xl">admin</h1>
      </header>

      <main className="mt-20">
        <div className="flex w-full justify-end">
          <button className="mr-4">oldest</button>
        </div>
        <div>
          {data.map((data) => (
            <TryoutList {...data} key={data.title} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Admin
