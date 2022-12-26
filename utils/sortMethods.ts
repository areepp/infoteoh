import { ITryout } from '../lib/tryout.service'

export interface ISortMethods {
  pendaftaranTerdekat: { method: () => number }
  pengerjaanterdekat: { method: () => number }
}

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
}
