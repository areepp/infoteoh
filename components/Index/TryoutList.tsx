import { formatDeadline } from '../../utils/dateHelper'

interface Props {
  judul: string
  mulaiPendaftaran: string
  akhirPendaftaran: string
  mulaiPengerjaan: string
  akhirPengerjaan: string
  link: string
}

const TryoutList = (props: Props) => {
  const {
    judul,
    mulaiPendaftaran,
    akhirPendaftaran,
    mulaiPengerjaan,
    akhirPengerjaan,
    link,
  } = props

  return (
    <div className="mt-2 p-4 border-t border-primary last:border-b">
      <h2 className="font-bold">{judul}</h2>
      <p>Pendaftaran: {formatDeadline(mulaiPendaftaran, akhirPendaftaran)}</p>
      <p>Pengerjaan: {formatDeadline(mulaiPengerjaan, akhirPengerjaan)}</p>
      <a className="underline" href={link} target="_blank" rel="noreferrer">
        link post instagram / twitter
      </a>
    </div>
  )
}

export default TryoutList
