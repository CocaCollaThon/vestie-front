import {useState} from "react"
import Header from "../../component/header/header";
import UnderButton from "../../component/under_button/under_button";
import {RegisterQuestionBox} from "../../component/registerServey/registerQuestionBox";
import axios from 'axios';

import "./registerServey.css";

export const RegisterSurvey = () => {
    var userId = sessionStorage.getItem("userID");
    
    const [numChildren, setNumChildren] = useState(1);
    const children = []

    var choiceTextList = new Array();

    for (let i = 1; i <= numChildren; i++) {
        children.push(<RegisterQuestionBox num={i} />)
        choiceTextList.push(sessionStorage.getItem("questionCmp_"+i));
        console.log(choiceTextList);

    }


    const addComponent = () => {
        setNumChildren((count) => count + 1)
    }

    const handelSurvey = () =>{
        axios.post('http://localhost:8080/api/v1/survey ', {
            "name": userId,
            "title": sessionStorage.getItem("title"),
            "startDate": new Date().toLocaleDateString('ko-kr'),
            "endDate": sessionStorage.getItem("endDate"),
            "expectedTime": sessionStorage.getItem("expectedTime"),
            "genderConstraint": sessionStorage.getItem("genderConstraint"),
            "geConstraint": sessionStorage.getItem("AgeConstraint"),
            "questions" : choiceTextList

        }).then(v =>{
            alert("휘리릭 뿅");
            sessionStorage.clear();
            sessionStorage.setItem("userID",userId);
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