import PropTypes from 'prop-types';

export const GifItem = ({url, title}) => {
  return (
    <div className='card'>
      <img src={url} alt={title} />
      { title != ' ' && <p>{title}</p>}
    </div>
  )
}

/* TAREA

1. Añadir PropTypes
  a. title obligatorio
  b. url obligatorio

2. Evaluar el snapshot

*/

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
