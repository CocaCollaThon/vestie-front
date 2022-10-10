import {Component} from "react";
import '../../component/surveyitem/style.css';
import {Header} from "../../component/header/header";
import {SurveyItem} from "../../component/surveyitem/surveyitem";

export class Main extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <SurveyItem></SurveyItem>
                <SurveyItem></SurveyItem>
                <SurveyItem></SurveyItem>
                <SurveyItem></SurveyItem>
            </div>
        )
    }
}