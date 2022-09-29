import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"


function FeedbackItem({item, handleDelete}) {
    const handleClick = (id) => {
        alert(id)
    }

  return (
    <Card reverse={false}>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className="close">
            <FaTimes color='grey' />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item : PropTypes.object.isRequired
}

export default FeedbackItem