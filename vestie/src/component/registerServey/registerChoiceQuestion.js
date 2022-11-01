import {useState} from "react";
import UnderLineInput from "../input/underline/underLineInput";
import Dropdown from "../dropdown/dropdown";
import './registerQuestion.css';


const QuestionQuestionList = ({num, children, addComponent}) => {
    return (
        <div>{children}</div>
    );
}


export const RegisterChoiceQuestion = (prop) => {
    const [numChildren, setNumChildren] = useState(0)
    const children = []

    for (let i = 0; i < numChildren; i++) {
        children.push(<UnderLineInput num={i}/>)
    }

    const addComponent = () => {
        setNumChildren((count) => count + 1)
    }

    return (
        <div className="register_question_box">
            <div className="choose_question_type">
                <div className="question_type_dropdown">
                    <Dropdown></Dropdown>
                </div>
            </div>

            <div className="type_title_box">
                <span className="questionNumber"> {prop.num} </span>
                <UnderLineInput></UnderLineInput>
            </div>

            <div className="add_questions">
                <input className="add_choice_button" type="radio"/>
                <QuestionQuestionList addComponent={addComponent} num={prop.num}>{children}</QuestionQuestionList>
            </div>

            <div className="btn_add_choice_box" onClick={addComponent}>
                <input className="add_choice_button" type="radio"/>
                <button className="btn_add_choice">추가</button>
            </div>
        </div>
    )
}
export default RegisterChoiceQuestion;