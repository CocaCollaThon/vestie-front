import {Component} from "react";
import {CompleteIcon} from "../completeicon/completeIcon";
import './style.css'

export class CompleteProceedSurveyComponent extends Component {
    render() {
        return (
            <div className="complete_survey_box">
                <div className="complete_survey_content">설문 참여 완료</div>
                <div className="icon_box"><CompleteIcon></CompleteIcon></div>
                <div className="complete_survey_gave_point_box"><span className="complete_survey_gave_point">10</span>p 지급 완료</div>
            </div>
        )
    }
}