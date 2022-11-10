import "./closedSurveyItem.css";
import { useNavigate,useLocation } from 'react-router-dom';


export const ClosedSurveyItem = ({survey}) => {
    const navigate = useNavigate();
    
    const moveToSurvey = () => {
        navigate('/survey', {
            state: {
                surveyId : survey.id
            }
        });
    }

    return <div className="survey_item_box" onClick={moveToSurvey}>

        <div className="survey_item_top_box">
            <div className="survey_item_name_box">
                {survey.title}
            </div>
            <div className="survey_item_date_box">
            {survey.startDate}~{survey.endDate}
            </div>
        </div>

        <div className="survey_item_bottom_box">
            <div className="survey_item_question_count_box">
                <span className="survey_item_question_count">
                종료</span> 
            </div>

            <div className="survey_item_give_point_box">
                <span className="survey_item_give_point">
                    {survey.participants}
                    </span> 응답
            </div>
        </div>
    </div>;
}

export default ClosedSurveyItem;
