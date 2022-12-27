import * as tryoutService from '../../lib/tryout.service'

const DeleteAction = ({ id }: { id: string }) => {
  const deleteTryout = async () => {
    if (confirm('yakin delete?')) {
      await tryoutService.deleteTryout(id)
    } else {
      return
    }
  }

  return (
    <button
      className="block mt-1 px-2 py-1 rounded bg-red-600 text-white text-xs"
      onClick={deleteTryout}
    >
      Delete
    </button>
  )
}

export default DeleteAction
