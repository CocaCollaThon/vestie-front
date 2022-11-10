import UnderLineInput from "../../input/underline/underLineInput";
import {useState,useEffect} from "react";


export const ShortAnswerQuestion = ({datas}) => {
    const [userInput, setUserInput] = useState("");

    const setSubjectiveAnswer =()=>{
        const subjectiveAnswer = new Object();
        subjectiveAnswer.answer = userInput;
        subjectiveAnswer.surveyQuestionId = datas.id;

        localStorage.setItem("subjectiveAnswer_"+datas.questionOrder,JSON.stringify(subjectiveAnswer));

    }
    useEffect(()=>{
        setSubjectiveAnswer();
    },[userInput])

    return (
        <div className="question_item_box">

            <div className="question_name">
                <span className="question_mark">{datas.questionOrder}</span>
                {datas.title}
            </div>

            <UnderLineInput acting ={(e)=>{setUserInput(e.target.value)}}></UnderLineInput>
        </div>
    );
}

export default ShortAnswerQuestion;
