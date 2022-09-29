import {useState} from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedBackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'


export default function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    //delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <>
            <Header/>
            <div className="container">
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

