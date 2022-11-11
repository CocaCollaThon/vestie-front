import CompleteIcon from "../completeicon/completeIcon";
import "./style.css";




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
                <span className="complete_survey_gave_point">{props.point}</span>p {props.point_text}
            </div>
        </div>
    );
}
export default CompleteProceedSurveyComponent;
