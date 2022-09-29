import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm({handleAdd}) {
    const [ text, setText ] = useState('')
    const [ rating, setRating ] = useState(10)
    const [ btnDisabled, setBtnDisabled ] = useState(true)
    const [ message, setMessage ] = useState('')

    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback);
        }
    }


    return (
        <Card> 
            <form onSubmit={handleSubmit}>
                <h2>Give us a rating! </h2>
                {/* Rating select component  */}
                <RatingSelect select={(rating) => setRating(rating)}/>
                {/* Text form area */}
                <div className="input-group">
                    <input type="text" 
                        placeholder="Write a review"
                        onChange={handleTextChange} 
                        value={text}
                    />
                    <Button type="submit" version="secondary"isDisabled={btnDisabled}>Submit</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm