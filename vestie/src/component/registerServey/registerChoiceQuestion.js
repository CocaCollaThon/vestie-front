import {useState} from "react";
import UnderLineInput from "../input/underline/underLineInput";
import Dropdown from "../dropdown/dropdown";
import './registerQuestion.css';
import ChoiceCmp from "../../component/question/chocieCmp/choiceComponent";



const QuestionList = ({num, children, addComponent}) => {
    return (
        <div>{children}</div>
    );
}


export const RegisterChoiceQuestion = (prop) => {
    

    const [radioBtnList, setRadioBtnList] = useState([]);

    const [newBtnText, setNewBtnText] = useState('');

    const onReset =(e) =>{
        setNewBtnText("");
        e.target.value="";
    }

    const addChoiceBtn=()=>{
        var choiceList=[...radioBtnList];
        choiceList.push(newBtnText);
        setRadioBtnList(choiceList);
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
                {radioBtnList.map((radioBtns, i)=>{
                    return (
                        
                        <ChoiceCmp value ={i} checked={i} btn_text ={radioBtns}></ChoiceCmp>
                    );
                })}
            </div>

            <div className="btn_add_choice_box">
                <input className="add_choice_button" type="radio"/>
                <UnderLineInput acting ={(e) => {setNewBtnText(e.target.value);}}></UnderLineInput>
                <button className="btn_add_choice"  onClick={addChoiceBtn}>추가</button>
            </div>
        </div>
    )
}
export default RegisterChoiceQuestion;