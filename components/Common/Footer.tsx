const Footer = () => {
  return (
    <footer className="h-[80px] w-full flex flex-col items-center justify-center pb-4 text-sm">
      {/* <p className="">
        dibuat oleh{' '}
        <a
          className="underline cursor-pointer"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/arepkesleo"
        >
          arep
        </a>
      </p> */}
      <p className="mt-2 px-4 md:max-w-4xl text-justify">
        <a
          className="underline"
          href="https://twitter.com/messages/compose?recipient_id=1559028123559010306&text=websitemu%20keren%20bangeeetttt,%20aku%20mau%20transfer%20duid%20175%20juta%20boleh%20nggk"
          target="_blank"
          rel="noreferrer"
        >
          DM aku
        </a>{' '}
        klo misalkan nemu kendala, punya masukan, ato mungkin sekadar tanya2
        tentang gimana rasanya kuliah di MIT. (aku ngga kuliah MIT sih
        sebenernya, tapi kalo mau tanya silakan, siapa tau aku gabisa jawab)
      </p>
    </footer>
  )
}

export default Footer
