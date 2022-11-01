import Header from "../../component/header/header";
import ChoiceQuestion from "../../component/question/choicequestion/choiceQuestion";
import ShortAnswerQuestion from "../../component/question/shortanswerquestion/shortAnswerQuestion";
import MultiChoiceQuestion from "../../component/question/multichoicequestion/multiChoiceQuestion";
import "./proceedSurvey.css";

export const ProceedSurvey = () => {
    return (
        <div>
            <Header></Header>
            <div className="questions">
                <ChoiceQuestion></ChoiceQuestion>
                <ChoiceQuestion></ChoiceQuestion>
                <ShortAnswerQuestion></ShortAnswerQuestion>
                <MultiChoiceQuestion></MultiChoiceQuestion>
                <MultiChoiceQuestion></MultiChoiceQuestion>
            </div>
        </div>
    );
}

export default ProceedSurvey;
