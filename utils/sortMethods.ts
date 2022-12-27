import { ITryout } from '../lib/tryout.service'

export const sortMethods = {
  pendaftaranTerdekat: {
    method: (a: ITryout, b: ITryout) =>
      Math.abs(new Date().getTime() - new Date(a.mulaiPendaftaran).getTime()) -
      Math.abs(new Date().getTime() - new Date(b.mulaiPendaftaran).getTime()),
  },
  pengerjaanTerdekat: {
    method: (a: ITryout, b: ITryout) =>
      Math.abs(new Date().getTime() - new Date(a.mulaiPengerjaan).getTime()) -
      Math.abs(new Date().getTime() - new Date(b.mulaiPengerjaan).getTime()),
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
