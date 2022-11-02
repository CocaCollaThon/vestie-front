import {useState} from "react";
import UnderLineInput from "../input/underline/underLineInput";
import Dropdown from "../dropdown/dropdown";
import './registerQuestion.css';
import ChoiceCmp from "../../component/question/chocieCmp/choiceComponent";



export const RegisterChoiceQuestion = () => {
    

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
            

            <div className="add_questions">
                {radioBtnList.map((radioBtns, i)=>{
                    return (
                        <ChoiceCmp value ={i} checked={i} btn_text ={radioBtns}></ChoiceCmp>
                    );
                })}
            </div>

            <div className="btn_add_choice_box">
                <input className="add_choice_radio_button" type="radio"/>
                <UnderLineInput acting ={(e) => {setNewBtnText(e.target.value);}}></UnderLineInput>
                <div className="btn_add_choice_box">
                    <button className="btn_add_choice"  onClick={addChoiceBtn}>추가</button>
                </div>
            </div>
        </div>
    )
}
export default RegisterChoiceQuestion;