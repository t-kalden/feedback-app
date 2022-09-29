import { useState } from "react"
import Card from "./shared/Card"

function FeedbackForm() {
    const [ text, setText ] = useState('')
    
    const handleTextChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <Card> 
            <form>
                <h2>Give us a rating! </h2>
                {/* @todo - rating select component */}
                <div className="input-group">
                    <input type="text" 
                        placeholder="Write a review"
                        onChange={handleTextChange} 
                        value={text}
                    />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm