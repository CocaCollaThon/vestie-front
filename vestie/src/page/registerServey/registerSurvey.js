import {useState, useEffect} from "react"
import Header from "../../component/header/header";
import UnderButton from "../../component/under_button/under_button";
import {RegisterQuestionBox} from "../../component/registerServey/registerQuestionBox";
import axios from 'axios';

import "./registerServey.css";
import { json } from "react-router-dom";

export const RegisterSurvey = () => {
    localStorage.clear();

    var userId = sessionStorage.getItem("userId");
    var choiceQuestionList = new Array();
    var subjectQuestionList = new Array();
    
    const [numChildren, setNumChildren] = useState(1);
    const children = []
    

    
    for (let i = 1; i <= numChildren; i++) {
        children.push(<RegisterQuestionBox num={i} />)
    }

    
    const setQuestionLists=()=>{
        for (let i = 1; i <= numChildren; i++) {

            if(localStorage.getItem("choiceQuestionCmp_"+i) !=null){
                
                choiceQuestionList.push(localStorage.getItem("choiceQuestionCmp_"+i));
                console.log("choiceQuestionList");
                console.log(choiceQuestionList);
                
                
            }else if(localStorage.getItem("subjectiveQuestionCmp_"+i) != null){
                subjectQuestionList.push(localStorage.getItem("subjectiveQuestionCmp_"+i));
                console.log("subjectQuestionList");
                console.log(subjectQuestionList);
                
            }
        }

    }



    const addComponent = () => {
        setNumChildren((count) => count + 1)
    }

    const handelSurvey = () =>{
        setQuestionLists();

        axios.post('http://localhost:8080/api/v1/survey ', {
            "userId": userId,
            "title": sessionStorage.getItem("title"),
            "startDate": new Date().toLocaleDateString('ko-kr'),
            "endDate": sessionStorage.getItem("endDate"),
            "expectedTime": sessionStorage.getItem("expectedTime"),
            "genderConstraint": sessionStorage.getItem("genderConstraint"),
            "minAgeConstraint": sessionStorage.getItem("AgeConstraint"),
            "maxAgeConstraint": sessionStorage.getItem("AgeConstraint")+9,
            "choiceQuestions" : choiceQuestionList,
            "subjectiveQuestions":subjectQuestionList

        }).then(v =>{
            alert("휘리릭 뿅");
            sessionStorage.clear();
            sessionStorage.setItem("userId",userId);
            sessionStorage.setItem("numOfSurvey",numChildren);
            window.location.href = "/check_before_register";

        },
        e =>{
            alert("서버 장애");
            console.error(e);
        })

    }

    return (
        <div>
            <Header></Header>
            <div className="register_questions">
                <div className="page_title">
                    설문지 작성
                </div>

                <div>{children}</div>

                <div className="btn_add_question_box">
                    <button className="btn_add_question" onClick={addComponent}>+</button>
                </div>

                <UnderButton button_title="완료" state="notMove" action={handelSurvey}></UnderButton>
            </div>
        </div>
    )
}