export const DeleteCategory = ({ onDelete, category }) => {
  return (
    <>
      <button onClick={ () => onDelete(category) } >Eliminar</button>
    </>
  )
}
