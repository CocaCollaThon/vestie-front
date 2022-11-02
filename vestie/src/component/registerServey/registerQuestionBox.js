import {useState} from "react";

import UnderLineInput from "../input/underline/underLineInput";

import Dropdown from "../dropdown/dropdown";
import './registerQuestion.css';
import RegisterChoiceQuestion from "./registerChoiceQuestion";
import RegisterShortAnswerQuestion from "./registerShortAnswerQuestion";




export const RegisterQuestionBox = (props) => {
    const [selected, setSelected] = useState("");

    const handleSelect = (e) => {
    setSelected(e.target.value);
    console.log(e.target.value);
    
    };

    const choceQuestionType=(type)=>{
        switch(type){
            case "" :return <RegisterChoiceQuestion></RegisterChoiceQuestion>; break;
            case "choice": return <RegisterChoiceQuestion></RegisterChoiceQuestion>; break;
            case "short_answer": return <RegisterShortAnswerQuestion></RegisterShortAnswerQuestion>; break;
        }
    }

    return (
        <div className="register_question_box">
            <div className="choose_question_type">
                <div className="question_type_dropdown">
                    <Dropdown acting={handleSelect}></Dropdown>
                </div>
            </div>

            <div className="type_title_box">
                <span className="questionNumber">{props.num} </span>
                <UnderLineInput></UnderLineInput>
            </div>
            {choceQuestionType(selected)}

            
        </div>
    );
}
export default RegisterQuestionBox;
