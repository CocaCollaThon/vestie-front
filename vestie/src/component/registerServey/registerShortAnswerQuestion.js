import UnderLineInput from "../input/underline/underLineInput";
import Dropdown from "../dropdown/dropdown";
import './registerQuestion.css';

export const RegisterShortAnswerQuestion = (props) => {
    return (
        <div className="register_question_box">
            <div className="choose_question_type">
                <div className="question_type_dropdown">
                    <Dropdown></Dropdown>
                </div>
            </div>

            <div className="type_title_box">
                <span className="questionNumber">{props.num} </span>
                <UnderLineInput></UnderLineInput>
            </div>

            <div className="answerQuestion">
                <UnderLineInput></UnderLineInput>
            </div>
        </div>
    );
}
export default RegisterShortAnswerQuestion;
