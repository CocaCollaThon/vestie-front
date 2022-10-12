import {Component} from "react";
import {Header} from "../../component/header/header";
import {ChoiceQuestion} from "../../component/question/choicequestion/choiceQuestion";
import {MultiChoiceQuestion} from "../../component/question/multichoicequestion/multiChoiceQuestion";
import {ShortAnswerQuestion} from "../../component/question/shortanswerquestion/shortAnswerQuestion";

export class ProceedSurvey extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <ChoiceQuestion></ChoiceQuestion>
                <ChoiceQuestion></ChoiceQuestion>
                <ShortAnswerQuestion></ShortAnswerQuestion>
                <MultiChoiceQuestion></MultiChoiceQuestion>
                <MultiChoiceQuestion></MultiChoiceQuestion>
            </div>
        )
    }
}