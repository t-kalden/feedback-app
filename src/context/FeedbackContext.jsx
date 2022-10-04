import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    //feedback state
    const [ feedback, setFeedback ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    },[])

    //FETCHING FEEDBACK
    const fetchFeedback = async() => {
        const response = await fetch(`http://localhost:5001/feedback?_sort=id&_order=desc`)
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

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

    //edit feedback item
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    //update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    }

    return <FeedbackContext.Provider value= {{
        isLoading,
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        feedbackEdit,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext