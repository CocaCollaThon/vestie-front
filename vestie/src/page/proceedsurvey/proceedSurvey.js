import Header from "../../component/header/header";
import ChoiceQuestion from "../../component/question/choicequestion/choiceQuestion";
import ShortAnswerQuestion from "../../component/question/shortanswerquestion/shortAnswerQuestion";
import MultiChoiceQuestion from "../../component/question/multichoicequestion/multiChoiceQuestion";

function ProceedSurvey() {
  return (
    <div>
      <Header></Header>
      <ChoiceQuestion></ChoiceQuestion>
      <ChoiceQuestion></ChoiceQuestion>
      <ShortAnswerQuestion></ShortAnswerQuestion>
      <MultiChoiceQuestion></MultiChoiceQuestion>
      <MultiChoiceQuestion></MultiChoiceQuestion>
    </div>
  );
}

export default ProceedSurvey;
