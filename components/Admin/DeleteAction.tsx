import * as tryoutService from '../../lib/tryout.service'

const DeleteAction = ({ id }: { id: string }) => {
  const deleteTryout = async () => {
    tryoutService.deleteTryout(id)
  }

  return (
    <button
      className="block px-2 py-1 rounded bg-red-600 text-white "
      onClick={deleteTryout}
    >
      Delete
    </button>
  )
}

export default DeleteAction
