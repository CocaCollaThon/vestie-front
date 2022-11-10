import {useState, useEffect} from "react";

import Header from "../../component/header/header";
import ChoiceQuestion from "../../component/question/choicequestion/choiceQuestion";
import ShortAnswerQuestion from "../../component/question/shortanswerquestion/shortAnswerQuestion";
import MultiChoiceQuestion from "../../component/question/multichoicequestion/multiChoiceQuestion";
import UnderButton from "../../component/under_button/under_button";
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';

import "./proceedSurvey.css";

var arrIndex = 0;




export const ProceedSurvey = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const surveyId = location.state.surveyId;

    const [sortedDataList, setSortedDataList] = useState([]); // question order로 정렬된 question List


    const [inputData, setInputData] = useState({
        "choiceQuestionResponses": [
          {
            "choiceOptionResponses": [
              {"name": "","optionId": 0},
            ],
            "id": 0,
            "isMultiSelectable": false,
            "questionOrder": 0,
            "title": "",
            "type": ""
          }
        ],
        "subjectiveQuestionResponses": [
          {
            "id": 0,
            "questionOrder": 0,
            "subjectiveType": "",
            "title": "",
            "type": ""
          }
        ]
        });

    const sortedData= new Array();
    const dataSorted = (inputData) => {

        inputData.choiceQuestionResponses.map(data =>{sortedData.push(data)});
        inputData.subjectiveQuestionResponses.map(data =>{sortedData.push(data)});
        console.log(sortedData.sort((a,b)=>a.questionOrder-b.questionOrder),1313131);
        
        setSortedDataList(sortedData);
    }


    useEffect(()=>{
        axios.get(`http://13.209.169.33:8080/api/v1/survey/${surveyId}`, 
        {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          })
            .then(v => {console.log(v.data);
            setInputData(v.data);
            
        });      
    },[]);

    
    useEffect(()=>{
        console.log(inputData);
        dataSorted(inputData);
    },[inputData])



    const moveToPage = () => {
        navigate('/check_before_submit', {
            state:{ "questionNum" : sortedDataList.length}
        })
    }



    return (
        
        <div>
            
            <Header></Header>
            <div className="question" >
                {sortedDataList.map(questionData=>{
                    switch(questionData.type){
                        case "choice" : return <ChoiceQuestion datas={questionData}></ChoiceQuestion>; break;
                        case "subjective" : return <ShortAnswerQuestion datas={questionData}></ShortAnswerQuestion>; break;
                    }
                })}

            </div>
            <div className="under_btn_box">
                
                <button className="under_btn" id ="under_btn" onClick={moveToPage}>
                    다음
                </button>
            </div>
        </div>
    );
}

export default ProceedSurvey;
