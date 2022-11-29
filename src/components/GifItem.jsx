export const GifItem = ({url, title}) => {
  return (
    <div className='card'>
      <img src={url} alt={title} />
      { title != ' ' && <p>{title}</p>}
    </div>
  )
}
