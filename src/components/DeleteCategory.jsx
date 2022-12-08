import PropTypes from 'prop-types'

export const DeleteCategory = ({ onDelete, category }) => {
  return (
    <>
      <button onClick={ () => onDelete(category) } >Eliminar</button>
    </>
  )
}

DeleteCategory.propTypes = {
  onDelete: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
}
