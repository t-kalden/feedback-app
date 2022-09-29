import { v4 as uuidv4 } from 'uuid'
import {useState} from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedBackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

export default function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    //delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    //add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback]);
    }

    return (
        <>
            <Header/>
            <div className="container">
                <FeedbackForm handleAdd = {addFeedback}/>
                <FeedbackStats 
                    feedback={feedback}
                />
                <FeedbackList 
                    feedback={feedback}
                    handleDelete = {deleteFeedback}
                />
            </div>
        </>

    )
}

