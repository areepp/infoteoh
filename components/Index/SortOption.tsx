import { useState } from 'react'
import { BiSortAlt2 } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

type TSortOption = 'Pendaftaran terdekat' | 'Pengerjaan terdekat'

const SortOption = () => {
  const [isSortOptionVisible, setIsSortOptionVisible] = useState(false)
  const [selectedSortOption, setSelectedSortOption] = useState<TSortOption>(
    'Pendaftaran terdekat',
  )

  return (
    <div className="relative flex w-full justify-end">
      <button
        onClick={() => setIsSortOptionVisible(!isSortOptionVisible)}
        className="mr-4 flex items-center"
      >
        <BiSortAlt2 />
        <span className="ml-1">{selectedSortOption}</span>
      </button>
      {isSortOptionVisible && (
        <OutsideClickHandler
          onOutsideClick={() => setIsSortOptionVisible(false)}
        >
          <div className="z-10 bg-canvas absolute top-full right-8 border border-primary">
            <div>Pendaftaran terdekat</div>
            <div>Pengerjaan terdekat</div>
          </div>
        </OutsideClickHandler>
      )}
    </div>
  )
}

export default SortOption
