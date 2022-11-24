import { useNavigate } from 'react-router-dom';
import "./closedSurveyItem.css";


export const ClosedSurveyItem = ({survey}) => {
    const navigate = useNavigate();
    
    const moveToSurvey = () => {
        navigate('/surveyResults', {
           
        });
    }

    return <div className="closedsurvey_item_box" onClick={moveToSurvey}>

        <div className="closedsurvey_item_top_box">
            <div className="closedsurvey_item_name_box">
                {survey.title}
            </div>

            <div className="closedsurvey_item_date_box">
                {survey.startDate}~{survey.endDate}
            </div>
        </div>

        <div className="closedsurvey_item_bottom_box">
            <div className="closedsurvey_item_question_count_box">
                <span className="closedsurvey_item_question_count">종료</span> 
            </div>

            <div className="closedsurvey_item_give_point_box">
                <span className="closedsurvey_item_give_point">13</span> 응답
            </div>
        </div>
    </div>;
}

export default ClosedSurveyItem;
