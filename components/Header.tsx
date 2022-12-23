import Link from 'next/link'

interface Props {
  title: string
  desc: string
  indexPage?: boolean
}

const Header = ({ title, desc, indexPage }: Props) => {
  return (
    <header className="p-4">
      <h1 className="text-4xl">{title}</h1>
      <p className="text-lg">{desc}</p>
      {indexPage && (
        <div className="mt-8">
          <span>
            Klo misal kamu tau ada TO gratis tapi belum ada di list di bawah,
            tlg kasih tau yhhh,{' '}
          </span>
          <Link href="/tambah-tryout" className="underline">
            lewat sini.
          </Link>
          <span> Makasihh :)</span>
        </div>
      )}
    </header>
  )
}

export default Header
