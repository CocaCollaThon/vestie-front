import "./style.css";

export const SurveyItem = ({survey}) => {
    const moveToSurvey = () => {
        window.location.href = "/survey";
    }

    return <div className="survey_item_box" onClick={moveToSurvey}>

        <div className="survey_item_top_box">
            <div className="survey_item_name_box">
                {survey.title}
            </div>
            <div className="survey_item_date_box">
                ~{survey.deadline}
            </div>
        </div>

        <div className="survey_item_bottom_box">
            <div className="survey_item_question_count_box">
                <span className="survey_item_question_count">
                    {survey.Q_num}
                    </span> 문항
            </div>

            <div className="survey_item_give_point_box">
                <span className="survey_item_give_point">
                    {survey.point}
                    </span> p
            </div>
        </div>
    </div>;
}

export default SurveyItem;
