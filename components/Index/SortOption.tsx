import { BiSortAlt2 } from 'react-icons/bi'

interface Props {
  setSortState: React.Dispatch<
    React.SetStateAction<'pendaftaranTerdekat' | 'pengerjaanTerdekat'>
  >
}

const SortOption = ({ setSortState }: Props) => {
  return (
    <div className="mt-12 flex w-full justify-end">
      <div className="mr-4 flex items-center">
        <BiSortAlt2 />

        <select
          className="bg-transparent focus:outline-none"
          defaultValue={'Pendaftaran terdekat'}
          onChange={(e) =>
            setSortState(
              e.target.value as 'pendaftaranTerdekat' | 'pengerjaanTerdekat',
            )
          }
        >
          <option value="pendaftaranTerdekat">Pendaftaran terdekat</option>
          <option value="pengerjaanTerdekat">Pengerjaan terdekat</option>
        </select>
      </div>
    </div>
  )
}

export default SortOption
