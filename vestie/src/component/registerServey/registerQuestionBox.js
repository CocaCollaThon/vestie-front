import {useState ,useEffect} from "react";

import UnderLineInput from "../input/underline/underLineInput";

import Dropdown from "../dropdown/dropdown";
import './registerQuestion.css';
import RegisterChoiceQuestion from "./registerChoiceQuestion";
import RegisterShortAnswerQuestion from "./registerShortAnswerQuestion";




export const RegisterQuestionBox = (props) => {
    const [questionType, setQuestionType] = useState("choice");
    const [questionTitle, setQuestionTitle] = useState("");

    const handleSelect = (e) => {
    setQuestionType(e.target.value);
    };

    const choiceQuestionData =(questionData) =>{
        var choiceList = JSON.parse(sessionStorage.getItem("choiceList_"+ props.num));
        if(choiceList != null){
            questionData.choiceTexts= choiceList.choiceTexts;
        }
    }

    var questionData = new Object();
    
    useEffect(() => {
        questionData.questionNum = props.num;
        questionData.questionType = questionType;
        questionData.questionTitle = questionTitle;
        switch(questionType){
            case "choice":  choiceQuestionData(questionData); break;
        }
        var questionDataToJSON = JSON.stringify(questionData);

        sessionStorage.removeItem("questionCmp_"+props.num);
        sessionStorage.setItem("questionCmp_"+props.num, questionDataToJSON);
        
        
    });

  

    const choceQuestionType=(type)=>{
        switch(type){
            case "" :return <RegisterChoiceQuestion questionNum={props.num}></RegisterChoiceQuestion>; break;
            case "choice": return <RegisterChoiceQuestion questionNum={props.num}></RegisterChoiceQuestion>; break;
            case "short_answer": return <RegisterShortAnswerQuestion questionNum={props.num}></RegisterShortAnswerQuestion>; break;
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
                <UnderLineInput acting={(e)=>setQuestionTitle(e.target.value)}></UnderLineInput>
            </div>
            {choceQuestionType(questionType)}

            
        </div>
    );
}
export default RegisterQuestionBox;
