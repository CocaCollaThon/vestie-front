import {Component} from "react";
import {Header} from "../../component/header/header";
import {CompleteProceedSurveyComponent} from "../../component/completeproceedsurvey/completeProceedSurveyComponent";

export class CompleteProceedSurvey extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <CompleteProceedSurveyComponent></CompleteProceedSurveyComponent>
            </div>
        )
    }
}