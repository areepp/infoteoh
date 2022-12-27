import * as tryoutService from '../../lib/tryout.service'

const EditStatus = ({ id }: { id: string }) => {
  const publish = async () => {
    await tryoutService.editStatus(id, 'published')
  }

  const reject = async () => {
    await tryoutService.editStatus(id, 'rejected')
  }

  return (
    <div>
      <button
        onClick={reject}
        className="px-2 py-1 rounded bg-canvas border border-primary text-xs cursor-pointer"
      >
        reject
      </button>
      <button
        onClick={publish}
        className="ml-2 px-2 py-1 rounded bg-primary border border-canvas text-canvas text-xs cursor-pointer"
      >
        publish
      </button>
    </div>
  )
}

export default EditStatus
