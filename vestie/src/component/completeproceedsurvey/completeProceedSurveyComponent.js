import "./style.css";
import CompleteIcon from "../completeicon/completeIcon";




export const CompleteProceedSurveyComponent = (props) => {
    return (
        <div className="complete_survey_box">
            <div className="complete_survey_content">
                {props.titleText}
            </div>

            <div className="icon_box">
                <CompleteIcon></CompleteIcon>
            </div>

            <div className="complete_survey_gave_point_box">
                <span className="complete_survey_gave_point">10</span>p 지급 완료
            </div>
        </div>
    );
}
export default CompleteProceedSurveyComponent;
