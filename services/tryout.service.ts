import { collection, query, where } from 'firebase/firestore'
import { db } from './firebase-client'

export const getPublishedTryouts = () =>
  query(collection(db, 'tryouts'), where('status', '==', 'published'))
