import UnderLineInput from "../input/underline/underLineInput";
import Dropdown from "../dropdown/dropdown";
import './registerQuestion.css';


export const RegisterChoiceQuestion=(props) => {
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
      
      <div className="add_questions">
        <input className="add_choice_button" type="radio" />
        <span> 무야호</span>
      </div>
      
      <div className="btn_add_choice_box">
          <input className="add_choice_button" type="radio" />
          <button className="btn_add_choice">추가</button>

      </div>

    </div>
  );
}
export default RegisterChoiceQuestion;
