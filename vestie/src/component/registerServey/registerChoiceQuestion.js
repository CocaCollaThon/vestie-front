import {useState, useEffect} from "react";
import UnderLineInput from "../input/underline/underLineInput";
import ChoiceCmp from "../../component/question/chocieCmp/choiceComponent";
import './registerQuestion.css';


export const RegisterChoiceQuestion = (props) => {
    

    const [radioBtnList, setRadioBtnList] = useState([]);
    const [newBtnText, setNewBtnText] = useState('');

    var choiceOptionList = new Array();
    var questionObjforJson = new Object();

    questionObjforJson.choiceOptions="";

    
    const setChoiceOptions = (content) => {
        var choiceOptionCmp = new Object();
        
        choiceOptionCmp.name =content;
        choiceOptionList.push(choiceOptionCmp);
        questionObjforJson.choiceOptions=[...choiceOptionList];
    }


    const btn_addChoice=()=>{
        
        var choiceList=[...radioBtnList];
        choiceList.push(newBtnText);
        setRadioBtnList(choiceList);

    }

    
    useEffect(() => {
        radioBtnList.map((radioBtnTexts, i)=>{
            setChoiceOptions(radioBtnTexts);

            var dataToJSON = JSON.stringify(questionObjforJson);
            localStorage.removeItem("choiceOptions_"+props.questionNum);
            localStorage.setItem("choiceOptions_"+props.questionNum, dataToJSON);

        });
    });


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