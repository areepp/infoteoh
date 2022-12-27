import * as tryoutService from '../../lib/tryout.service'

const Publish = ({ id }: { id: string }) => {
  const publish = async () => {
    if (confirm('yakin publish?')) {
      await tryoutService.editStatusPublished(id)
    } else {
      return
    }
  }

  return (
    <div>
      <button
        onClick={publish}
        className="px-2 py-1 rounded bg-canvas border border-primary text-primary text-xs cursor-pointer"
      >
        Publish
      </button>
    </div>
  )
}

export default Publish
