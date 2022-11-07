import {useState, useEffect} from "react";
import UnderLineInput from "../input/underline/underLineInput";
import './registerQuestion.css';
import ChoiceCmp from "../../component/question/chocieCmp/choiceComponent";



export const RegisterChoiceQuestion = (props) => {
    
    

    const [radioBtnList, setRadioBtnList] = useState([]);
    const [newBtnText, setNewBtnText] = useState('');

    var choiceTextList = new Array();

    var questionObjforJson = new Object();
    questionObjforJson.choiceTexts="";

    useEffect(() => {
        radioBtnList.map((radioBtnTexts, i)=>{
            setChoiceTexts(radioBtnTexts);

            var dataToJSON = JSON.stringify(questionObjforJson);
            
            sessionStorage.removeItem("choiceList_"+props.questionNum);
            sessionStorage.setItem("choiceList_"+props.questionNum, dataToJSON);
        });
    });

    const setChoiceTexts = (content) => {
        choiceTextList.push(content);
        questionObjforJson.choiceTexts=choiceTextList;
    }

    const btn_addChoice=()=>{

        var choiceList=[...radioBtnList];
        choiceList.push(newBtnText);
        setRadioBtnList(choiceList);

    }

    
    return (
        <div className="register_question_box">
            

            <div className="add_questions">
                {radioBtnList.map((radioBtnTexts, i)=>{
                    return (
                        <ChoiceCmp value ={i} checked={i} btn_text ={radioBtnTexts} groupName={props.questionNum}></ChoiceCmp>
                    );
                })}
            </div>

            <div className="btn_add_choice_box">
                <input className="add_choice_radio_button" type="radio"/>
                <UnderLineInput acting ={(e) => {setNewBtnText(e.target.value);}}></UnderLineInput>
                <div className="btn_add_choice_box">
                    <button className="btn_add_choice"  onClick={btn_addChoice}>추가</button>
                </div>
               
            </div>
        </div>
    )
}
export default RegisterChoiceQuestion;