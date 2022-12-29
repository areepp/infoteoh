import { isToday } from 'date-fns'
import { ITryout } from '../lib/tryout.service'
import { isInThePast } from './dateHelper'

export const sortMethods = {
  pendaftaranTerdekat: {
    method: (a: ITryout, b: ITryout) => {
      if (
        isInThePast(
          new Date(a.mulaiPendaftaran) || isToday(new Date(a.mulaiPendaftaran)),
        )
      ) {
        // pendaftaran sudah dibuka tapi belum berakhir. misal hari ini tanggal 25 desember. Deadline pendaftaran 20 desember - 1 januari
        return -1
      } else if (
        isInThePast(new Date(b.mulaiPendaftaran)) ||
        isToday(new Date(b.mulaiPendaftaran))
      ) {
        return 1
      } else {
        return (
          Math.abs(
            new Date().getTime() - new Date(a.mulaiPendaftaran).getTime(),
          ) -
          Math.abs(
            new Date().getTime() - new Date(b.mulaiPendaftaran).getTime(),
          )
        )
      }
      // return (
      //   Math.abs(
      //     new Date().getTime() - new Date(a.mulaiPendaftaran).getTime(),
      //   ) -
      //   Math.abs(new Date().getTime() - new Date(b.mulaiPendaftaran).getTime())
      // )
    },
  },
  pengerjaanTerdekat: {
    method: (a: ITryout, b: ITryout) => {
      return (
        Math.abs(new Date().getTime() - new Date(a.mulaiPengerjaan).getTime()) -
        Math.abs(new Date().getTime() - new Date(b.mulaiPengerjaan).getTime())
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
