import {Component} from "react";
import {Header} from "../../component/header/header";
import {ChoiceQuestion} from "../../component/choicequestion/choiceQuestion";
import {MultiChoiceQuestion} from "../../component/multichoicequestion/multiChoiceQuestion";

export class ProceedSurvey extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <ChoiceQuestion></ChoiceQuestion>
                <ChoiceQuestion></ChoiceQuestion>
                <MultiChoiceQuestion></MultiChoiceQuestion>
                <MultiChoiceQuestion></MultiChoiceQuestion>
            </div>
        )
    }
}