import { collection, query, where } from 'firebase/firestore'
import { db } from './firebase-client'

export interface ITryout {
  judul: string
  mulaiPendaftaran: string
  akhirPendaftaran: string
  mulaiPengerjaan: string
  akhirPengerjaan: string
  link: string
}

export const getPublishedTryouts = () =>
  query(collection(db, 'tryouts'), where('status', '==', 'published'))
