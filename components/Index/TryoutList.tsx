interface Props {
  title: string
  pendaftaran: string
  pengerjaan: string
  linkedPost: string
}

const TryoutList = (props: Props) => {
  return (
    <div className="mt-2 p-4 border-t border-primary last:border-b">
      <h2 className="font-bold">{props.title}</h2>
      <p>{props.pendaftaran}</p>
      <p>{props.pengerjaan}</p>
      <a className="underline" href={props.linkedPost}>
        link post instagram / twitter
      </a>
    </div>
  )
}

export default TryoutList
