import { formatDeadline } from '../../utils/dateHelper'

interface Props {
  penyelenggara: string
  mulaiPendaftaran: string
  akhirPendaftaran: string
  mulaiPengerjaan: string
  akhirPengerjaan: string
  link: string
  isPast?: boolean
}

const TryoutList = (props: Props) => {
  const {
    penyelenggara,
    mulaiPendaftaran,
    akhirPendaftaran,
    mulaiPengerjaan,
    akhirPengerjaan,
    link,
    isPast,
  } = props

  return (
    <div
      className={`mt-2 py-4 border-t first:border-none last:border-b ${
        isPast
          ? 'text-placeholder border-secondary'
          : 'text-primary border-primary'
      }`}
    >
      <h2 className="font-bold">{penyelenggara}</h2>
      <p>Pendaftaran: {formatDeadline(mulaiPendaftaran, akhirPendaftaran)}</p>
      <p>Pengerjaan: {formatDeadline(mulaiPengerjaan, akhirPengerjaan)}</p>
      <a className="underline" href={link} target="_blank" rel="noreferrer">
        link post instagram / twitter
      </a>
    </div>
  )
}

export default TryoutList
