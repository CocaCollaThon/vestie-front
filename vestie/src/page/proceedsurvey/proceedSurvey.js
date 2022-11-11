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
    const [surveySimpleResponse, setSurveySimpleResponse] = useState([]); 


    const [inputData, setInputData] = useState(
        {
            "choiceQuestionResponses": [
              {
                "choiceOptionResponses": [
                  {
                    "name": "string",
                    "optionId": 0
                  }
                ],
                "id": 0,
                "isMultiSelectable": true,
                "questionOrder": 0,
                "title": "string",
                "type": "string"
              }
            ],
            "subjectiveQuestionResponses": [
              {
                "id": 0,
                "questionOrder": 0,
                "subjectiveType": "ESSAY",
                "title": "string",
                "type": "string"
              }
            ],
            "surveySimpleResponse": {
              "constraint": {
                "genderConstraint": "NO_CONSTRAINT",
                "maxAgeConstraint": 0,
                "minAgeConstraint": 0
              },
              "endDate": "2022-11-10",
              "expectedTime": 0,
              "id": 0,
              "memberId": 0,
              "point": 0,
              "questionNumber": 0,
              "startDate": "2022-11-10",
              "title": "string"
            }
          }
    );

    const sortedData= new Array();
    const choiceQuestionAnswerRequests= new Array();
    const subjectiveQuestionAnswerRequests= new Array();

    const dataSorted = (inputData) => {

        inputData.choiceQuestionResponses.map(data =>{sortedData.push(data)});
        inputData.subjectiveQuestionResponses.map(data =>{sortedData.push(data)});
        sortedData.sort((a, b) => a.questionOrder - b.questionOrder);
        setSortedDataList(sortedData);
    }


    useEffect(()=>{
        axios.get(`http://13.209.169.33:8080/api/v1/survey/${surveyId}`, 
        {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          })
            .then(v => {
            setInputData(v.data);
            
        });      
    },[]);

    
    useEffect(()=>{
        dataSorted(inputData);
        setSurveySimpleResponse(inputData.surveySimpleResponse);
    },[inputData])


    const setAnswerList=()=>{
        for (let i = 1; i <= surveySimpleResponse.questionNumber; i++) {

            if(localStorage.getItem("choiceAnswer_"+i) !=null){
                console.log(localStorage.getItem("choiceAnswer_"+i));
                
                choiceQuestionAnswerRequests.push(JSON.parse(localStorage.getItem("choiceAnswer_"+i)));
                
            }else if(localStorage.getItem("subjectiveAnswer_"+i) != null){
                subjectiveQuestionAnswerRequests.push(JSON.parse(localStorage.getItem("subjectiveAnswer_"+i)));
                
            }
        }

    }

    


    const submitAnswers = () => {
        setAnswerList();

        console.log("choiceQuestionAnswerRequests");
        console.log(choiceQuestionAnswerRequests);
        console.log("subjectiveQuestionAnswerRequests");
        console.log(subjectiveQuestionAnswerRequests);

        axios.post('http://13.209.169.33:8080/api/v1/written-survey', {
              "surveyId": surveySimpleResponse.id,
              "choiceQuestionAnswerRequests": choiceQuestionAnswerRequests,
              "subjectiveQuestionAnswerRequests": subjectiveQuestionAnswerRequests,
        },{
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          }}).then(v =>{
            alert("제출 뿅");
            localStorage.clear();
            navigate('/check_before_submit', {
                state:{ "numOfQuestion" : surveySimpleResponse.questionNumber}
            })
        },
        e =>{
            alert("서버 장애");
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
                
                <button className="under_btn" id ="under_btn" onClick={submitAnswers}>
                    완료
                </button>
            </div>
        </div>
    );
}

export default ProceedSurvey;
