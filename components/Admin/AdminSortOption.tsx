import { BiSortAlt2 } from 'react-icons/bi'

interface Props {
  setSortState: React.Dispatch<React.SetStateAction<'oldest' | 'newest'>>
}

const AdminSortOption = ({ setSortState }: Props) => {
  return (
    <div className="px-4 flex w-full justify-between text-sm">
      <div className="flex">
        filter by:
        <div className="flex items-center">
          <select
            className="bg-transparent focus:outline-none"
            defaultValue={'needAction'}
          >
            <option value="needAction">need action</option>
            <option value="published">published</option>
            <option value="rejected">rejected</option>
            <option value="pastDeadline">past deadline</option>
            <option value="all">all</option>
          </select>
        </div>
      </div>
      <div className="flex">
        sort by:
        <div className="mr-4 flex items-center">
          <select
            className="bg-transparent focus:outline-none"
            defaultValue={'oldest'}
            onChange={(e) =>
              setSortState(e.target.value as 'oldest' | 'newest')
            }
          >
            <option value="oldest">oldest</option>
            <option value="newest">newest</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default AdminSortOption
