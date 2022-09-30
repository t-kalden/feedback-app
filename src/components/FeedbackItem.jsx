import { useContext } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'

import FeedbackContext from '../context/FeedbackContext'
import PropTypes from 'prop-types'
import Card from "./shared/Card"


function FeedbackItem({item}) {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card reverse={false}>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
            <FaTimes color='grey'/>
        </button>
        <button className="edit" onClick={() => editFeedback(item)}>
          <FaEdit color="grey"></FaEdit>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item : PropTypes.object.isRequired
}

export default FeedbackItem