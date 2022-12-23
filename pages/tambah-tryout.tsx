const TambahTryout = () => {
  return (
    <div className="bg-canvas min-h-screen p-4">
      <header>
        <h1 className="text-4xl">infoteoh</h1>
        <p className="text-lg">
          Website buat para klean yang pengen nyari info TO gratis.
        </p>
      </header>
      <main className="mt-16">
        <h2 className="text-lg">Tambah info try-out baru</h2>
        <form className="mt-8">
          <div>
            <label>Penyelenggara</label>
            <input
              className="w-full pl-2 p-1 rounded bg-inherit border border-primary focus:outline-none placeholder:text-xs placeholder:text-placeholder"
              placeholder="ex. Pahamify, Ruangguru #15"
              type="text"
            />
          </div>

          <div className="mt-4">
            <label className="">Link postingan instagram / twitter</label>
            <input
              className="w-full pl-2 p-1 rounded bg-inherit border border-primary focus:outline-none placeholder:text-xs placeholder:text-placeholder"
              type="text"
            />
          </div>

          <div className="mt-4">
            <label>Deadline pendaftaran</label>
            <input
              className="w-full p-1 pl-2 rounded bg-inherit border border-primary focus:outline-none placeholder:text-xs placeholder:text-placeholder"
              type="text"
              placeholder="dari tanggal"
            />
            <input
              className="mt-2 w-full p-1 pl-2 rounded bg-inherit border border-primary focus:outline-none placeholder:text-xs placeholder:text-placeholder"
              type="text"
              placeholder="sampai tanggal"
            />
          </div>

          <div className="mt-4">
            <label>Deadline pengerjaan</label>
            <input
              className="w-full p-1 pl-2 rounded bg-inherit border border-primary focus:outline-none placeholder:text-xs placeholder:text-placeholder"
              type="text"
              placeholder="dari tanggal"
            />
            <input
              className="mt-2 w-full p-1 pl-2 rounded bg-inherit border border-primary focus:outline-none placeholder:text-xs placeholder:text-placeholder"
              type="text"
              placeholder="sampai tanggal"
            />
          </div>
          <button
            className="mt-4 bg-primary text-canvas px-3 py-2 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  )
}

export default TambahTryout
