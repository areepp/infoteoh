import { ITryout } from '../../lib/tryout.service'
import { formatDeadline } from '../../utils/dateHelper'
import DeleteAction from './DeleteAction'
import Publish from './Publish'

const AdminTryoutList = (props: ITryout) => {
  const {
    id,
    penyelenggara,
    mulaiPendaftaran,
    akhirPendaftaran,
    mulaiPengerjaan,
    akhirPengerjaan,
    link,
    status,
    publishedAt,
  } = props

  const ableToDelete = () => {
    if (status === 'rejected' || status === 'pastDeadline') return true
    return false
  }

  return (
    <div className="mt-2 p-4 border-t border-primary last:border-b">
      <h2 className="font-bold">{penyelenggara}</h2>
      <p>
        status: <span className="font-bold">{status}</span>
      </p>
      <p>Pendaftaran: {formatDeadline(mulaiPendaftaran, akhirPendaftaran)}</p>
      <p>Pengerjaan: {formatDeadline(mulaiPengerjaan, akhirPengerjaan)}</p>
      <a className="underline" href={link} target="_blank" rel="noreferrer">
        {link}
      </a>

      {status === 'needAction' && <Publish id={id} />}
      <DeleteAction id={id} />
    </div>
  )
}

export default AdminTryoutList
