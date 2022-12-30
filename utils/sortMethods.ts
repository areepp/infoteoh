import { isToday } from 'date-fns'
import { ITryout } from '../lib/tryout.service'
import { isInThePast } from './dateHelper'

export const sortMethods = {
  pendaftaranTerdekat: {
    method: (a: ITryout, b: ITryout) => {
      return (
        new Date(a.mulaiPendaftaran).getTime() -
        new Date(b.mulaiPendaftaran).getTime()
      )
    },
  },
  pengerjaanTerdekat: {
    method: (a: ITryout, b: ITryout) => {
      return (
        new Date(a.mulaiPengerjaan).getTime() -
        new Date(b.mulaiPengerjaan).getTime()
      )
    },
  },
  newest: {
    method: (a: ITryout, b: ITryout) =>
      b.publishedAt.toDate().getTime() - a.publishedAt.toDate().getTime(),
  },
  oldest: {
    method: (a: ITryout, b: ITryout) =>
      a.publishedAt.toDate().getTime() - b.publishedAt.toDate().getTime(),
  },
}
