import {
  collection,
  DocumentData,
  FirestoreDataConverter,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  SnapshotOptions,
  where,
  WithFieldValue,
} from 'firebase/firestore'
import { db } from './firebase-client'

export interface ITryout {
  id: string
  judul: string
  mulaiPendaftaran: string
  akhirPendaftaran: string
  mulaiPengerjaan: string
  akhirPengerjaan: string
  link: string
}

const tryoutConverter: FirestoreDataConverter<ITryout> = {
  toFirestore(tryout: WithFieldValue<ITryout>): DocumentData {
    return {
      judul: tryout.judul,
      mulaiPendaftaran: tryout.mulaiPendaftaran,
      akhirPendaftaran: tryout.akhirPendaftaran,
      mulaiPengerjaan: tryout.mulaiPengerjaan,
      akhirPengerjaan: tryout.akhirPengerjaan,
      link: tryout.link,
    }
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): ITryout {
    const data = snapshot.data(options)
    return {
      id: snapshot.id,
      judul: data.judul,
      mulaiPendaftaran: data.mulaiPendaftaran,
      akhirPendaftaran: data.akhirPendaftaran,
      mulaiPengerjaan: data.mulaiPengerjaan,
      akhirPengerjaan: data.akhirPengerjaan,
      link: data.link,
    }
  },
}

export const getPublishedTryouts = () =>
  query(
    collection(db, 'tryouts'),
    where('status', '==', 'published'),
  ).withConverter(tryoutConverter)
