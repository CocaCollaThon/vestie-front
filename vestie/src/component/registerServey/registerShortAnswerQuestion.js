import UnderLineInput from "../input/underline/underLineInput";
import Dropdown from "../dropdown/dropdown";
import './registerQuestion.css';

export const RegisterShortAnswerQuestion = () => {
    return (
        <div className="register_question_box">
            

            <div className="answerQuestion">
                <UnderLineInput></UnderLineInput>
            </div>
        </div>
    );
}
export default RegisterShortAnswerQuestion;
