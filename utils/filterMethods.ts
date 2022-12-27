import { ITryout } from '../lib/tryout.service'

export const filterMethods = {
  needAction: {
    method: (item: ITryout) => item.status === 'needAction',
  },
  published: {
    method: (item: ITryout) => item.status === 'published',
  },
  rejected: {
    method: (item: ITryout) => item.status === 'rejected',
  },
  pastDeadline: {
    method: (item: ITryout) => item.status === 'pastDeadline',
  },
  all: {
    method: (item: ITryout) => true,
  },
}
