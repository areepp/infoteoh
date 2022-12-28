import Link from 'next/link'

interface Props {
  title: string
  desc: string
  indexPage?: boolean
}

const Header = ({ title, desc, indexPage }: Props) => {
  return (
    <header className="p-4">
      <Link className="cursor-pointer" href="/">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          {title}
        </h1>
      </Link>
      <p className="text-lg lg:text-xl">{desc}</p>
      {indexPage && (
        <div className="mt-8 md:mt-16 xl:mt-24">
          <span>
            Klo misal kamu tau ada info TO gratis tapi belum ada di list di
            bawah, tlg kasih tau yhhh,{' '}
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
