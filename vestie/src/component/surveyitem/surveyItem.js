import "./style.css";


export const SurveyItem = ({ survey }) => {

    return <div className="survey_item_box">

        {/* 설문의 이름과 날짜 제공 */}
        <div className="survey_item_top_box">
            {/* 설문의 이름 */}
            <div className="survey_item_name_box">
                {survey.title}
            </div>
            {/* 설문 진행날짜 */}
            <div className="survey_item_date_box">
                ~{survey.deadline}
            </div>
        </div>

        {/* 문항 수와 포인트 정보 제공 */}
        <div className="survey_item_bottom_box">
            {/* 문항 수 */}
            <div className="survey_item_question_count_box">
                <span className="survey_item_question_count">
                    {survey.Q_num}
                    </span> 문항
            </div>

            {/* 포인트 정보 */}
            <div className="survey_item_give_point_box">
                <span className="survey_item_give_point">
                    {survey.point}
                    </span> p
            </div>
        </div>

    </div>;
}

export default SurveyItem;
