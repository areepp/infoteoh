import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  FieldValue,
  FirestoreDataConverter,
  getDocs,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  setDoc,
  SnapshotOptions,
  Timestamp,
  updateDoc,
  where,
  WithFieldValue,
} from 'firebase/firestore'
import { db } from './firebase-client'

export interface ITryout {
  id: string
  penyelenggara: string
  mulaiPendaftaran: string
  akhirPendaftaran: string
  mulaiPengerjaan: string
  akhirPengerjaan: string
  link: string
  status: 'published' | 'pastDeadline' | 'rejected' | 'needAction'
  publishedAt: Timestamp
}

const tryoutConverter: FirestoreDataConverter<ITryout> = {
  toFirestore(tryout: WithFieldValue<ITryout>): DocumentData {
    return {
      penyelenggara: tryout.penyelenggara,
      mulaiPendaftaran: tryout.mulaiPendaftaran,
      akhirPendaftaran: tryout.akhirPendaftaran,
      mulaiPengerjaan: tryout.mulaiPengerjaan,
      akhirPengerjaan: tryout.akhirPengerjaan,
      link: tryout.link,
      status: tryout.status,
      publishedAt: tryout.publishedAt,
    }
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): ITryout {
    const data = snapshot.data(options)
    return {
      id: snapshot.id,
      penyelenggara: data.penyelenggara,
      mulaiPendaftaran: data.mulaiPendaftaran,
      akhirPendaftaran: data.akhirPendaftaran,
      mulaiPengerjaan: data.mulaiPengerjaan,
      akhirPengerjaan: data.akhirPengerjaan,
      link: data.link,
      status: data.status,
      publishedAt: data.publishedAt,
    }
  },
}

export const getPublishedTryouts = () =>
  query(
    collection(db, 'tryouts'),
    where('status', '==', 'published'),
  ).withConverter(tryoutConverter)

export const getAllTryouts = () =>
  query(collection(db, 'tryouts')).withConverter(tryoutConverter)

export const uploadTryout = (data: Omit<ITryout, 'id'>) =>
  addDoc(collection(db, 'tryouts'), data)

// ADMIN

export const editStatus = (id: string, status: 'published' | 'rejected') =>
  updateDoc(doc(db, 'tryouts', id), { status })

export const deleteTryout = (id: string) => deleteDoc(doc(db, 'tryouts', id))
