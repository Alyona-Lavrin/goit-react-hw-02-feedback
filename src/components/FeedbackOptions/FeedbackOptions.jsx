import { GOOD, NEUTRAL, BAD} from "../../constants"

const FeedbackOptions = ({onLeaveFeedback}) => {
    return (
        <div>
            <button className="button" onClick={() => onLeaveFeedback(GOOD)}>good</button> 
            <button className="button" onClick={() => onLeaveFeedback(NEUTRAL)}>neutral</button> 
            <button className="button" onClick={() => onLeaveFeedback(BAD)}>bad</button>
        </div>
    )
}

export default FeedbackOptions