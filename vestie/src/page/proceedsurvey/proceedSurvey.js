import {useState} from "react";

import Header from "../../component/header/header";
import ChoiceQuestion from "../../component/question/choicequestion/choiceQuestion";
import ShortAnswerQuestion from "../../component/question/shortanswerquestion/shortAnswerQuestion";
import MultiChoiceQuestion from "../../component/question/multichoicequestion/multiChoiceQuestion";
import UnderButton from "../../component/under_button/under_button";

import "./proceedSurvey.css";

var arrIndex = 0;

export const ProceedSurvey = () => {

    // axios.get("http://localhost:8080/api/v1/survey/X")
    //         .then(v => {
    //             setCategories(v.data)
    //             setCategory(v.data[0])
    //         })

    const questions = [
        [
        <ChoiceQuestion></ChoiceQuestion>,
        <ChoiceQuestion></ChoiceQuestion>,
        <ChoiceQuestion></ChoiceQuestion>,
        <ChoiceQuestion></ChoiceQuestion>,
        <ChoiceQuestion></ChoiceQuestion>
        ],
        [
        <ShortAnswerQuestion></ShortAnswerQuestion>,
        <ShortAnswerQuestion></ShortAnswerQuestion>,
        <ShortAnswerQuestion></ShortAnswerQuestion>,
        <ShortAnswerQuestion></ShortAnswerQuestion>,
        <ShortAnswerQuestion></ShortAnswerQuestion>,
        ],
        [
        <MultiChoiceQuestion></MultiChoiceQuestion>,
        <MultiChoiceQuestion></MultiChoiceQuestion>,
        <MultiChoiceQuestion></MultiChoiceQuestion>

        ]
    ];

    
    const [questionList, setQuestionList] = useState(questions[arrIndex]);


    const moveToPage = () => {
        window.location.href = "/check_before_submit";
    }


    const nextQuestions = () => {

        if( arrIndex==questions.length-2){
            const btnElement = document.getElementById('under_btn');
            btnElement.innerText ="완료";
        }
        arrIndex += 1;
        {
            console.log(arrIndex)
            console.log(questions.length)
        }

        setQuestionList(questions[arrIndex]);

        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    }
    while(arrIndex<questions.length){

        return (
            <div>
                <Header></Header>
                <div className="question" >
                    {questionList.map((question, index) => {
                        return <div key={index}>{question}</div>
                    })}
                </div>
                <div className="under_btn_box">
                    
                    <button className="under_btn" id ="under_btn" onClick={(arrIndex<questions.length-1)? nextQuestions: moveToPage}>
                        다음
                    </button>
                </div>
            </div>
        );
    }
}

export default ProceedSurvey;
