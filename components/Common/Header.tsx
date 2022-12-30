import Link from 'next/link'

interface Props {
  title: string
  desc: string
  indexPage?: boolean
}

const Header = ({ title, desc, indexPage }: Props) => {
  return (
    <header className="p-4 min-h-[130px]">
      <Link className="cursor-pointer" href="/">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          {title}
        </h1>
      </Link>
      <p className="text-lg lg:text-xl">{desc}</p>
    </header>
  )
}

export default Header
