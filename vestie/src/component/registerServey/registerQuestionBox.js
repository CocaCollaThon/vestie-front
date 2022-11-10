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
        if(questionType=="choice"){
            localStorage.removeItem("choiceQuestionCmp_"+props.num);
            localStorage.removeItem("choiceList_"+props.num);
        }
        else{localStorage.removeItem("subjectiveQuestionCmp_"+props.num)}
    };


    
    const choiceQuestionData =() =>{
        var choiceQuestionData = new Object();
        
        choiceQuestionData.title = questionTitle;
        choiceQuestionData.isMultiSelectable = false;
        
        var choiceList = JSON.parse(localStorage.getItem("choiceList_"+ props.num));
        if(choiceList != null){
            choiceQuestionData.choiceOptions= choiceList.choiceOptions;
        }

        choiceQuestionData.questionOrder= props.num;

        var choiceQuestionDataToJSON = JSON.stringify(choiceQuestionData);
        localStorage.removeItem("choiceQuestionCmp_"+props.num);
        localStorage.setItem("choiceQuestionCmp_"+props.num, choiceQuestionDataToJSON);
        

    }

    const subjectiveQuestionData = () =>{
        var subjectiveQuestionData = new Object();

        subjectiveQuestionData.title = questionTitle;
        subjectiveQuestionData.subjectiveType = "SHORT_ANSWER";
        subjectiveQuestionData.questionOrder= props.num;

        var subjectiveQuestionDataToJSON = JSON.stringify(subjectiveQuestionData);
        
        localStorage.removeItem("subjectiveQuestionCmp_"+props.num);
        localStorage.setItem("subjectiveQuestionCmp_"+props.num, subjectiveQuestionDataToJSON);
        

        
    }
   
    
    useEffect(() => {
        
        switch(questionType){
            case "choice":  choiceQuestionData(); break;
            case "short_answer" : subjectiveQuestionData(); break;
        }
        
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
