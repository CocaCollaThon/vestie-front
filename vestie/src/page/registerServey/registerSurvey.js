import {useState,useEffect} from "react"
import { useNavigate,useLocation } from 'react-router-dom';
import Header from "../../component/header/header";
import UnderButton from "../../component/under_button/under_button";
import {RegisterQuestionBox} from "../../component/registerServey/registerQuestionBox";
import axios from 'axios';
import "./registerServey.css";

export const RegisterSurvey = () => {
    const [numChildren, setNumChildren] = useState(1);
    const navigate = useNavigate();
    const location = useLocation();
    const children = [];
    
    var choiceQuestionList = new Array();
    var subjectQuestionList = new Array();
    
    
    for (let i = 1; i <= numChildren; i++) {
        children.push(<RegisterQuestionBox num={i} />)
    }

    useEffect(()=>{
        
    })
    const setQuestionLists=()=>{
        for (let i = 1; i <= numChildren; i++) {

            if(localStorage.getItem("choiceQuestionCmp_"+i) !=null){
                choiceQuestionList.push(JSON.parse(localStorage.getItem("choiceQuestionCmp_"+i)));
            }else if(localStorage.getItem("subjectiveQuestionCmp_"+i) != null){
                subjectQuestionList.push(JSON.parse(localStorage.getItem("subjectiveQuestionCmp_"+i)));
            }
        }
    }


    const addComponent = () => {
        setNumChildren((count) => count + 1)
    }

    const handelSurvey = () =>{
        setQuestionLists();

        axios.post('http://13.209.169.33:8080/api/v1/survey ', {
            choiceQuestions : choiceQuestionList,
            endDate: location.state.endDate,
            expectedTime: location.state.expectedTime,
            genderConstraint: location.state.genderConstraint,
	        maxAgeConstraint: location.state.maxAgeConstraint,
            minAgeConstraint: location.state.minAgeConstraint,
            startDate: new Date().toLocaleDateString('ko-kr').replace(/\./g, '').split(' ').join('-'),
            subjectiveQuestions:subjectQuestionList,
            title: location.state.title,
          
        },{
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            }}).then(v =>{
            localStorage.clear();
            navigate('/check_before_register', {
                state: {
                    numOfQuestion : numChildren
                }
            });
        },
        e =>{
            alert("?????? ??????");
            console.error(e);
        })

    }

    return (
        <div>
            <Header></Header>
            <div className="register_questions">
                <div className="page_title">
                    ????????? ??????
                </div>

                <div>{children}</div>

                <div className="btn_add_question_box">
                    <button className="btn_add_question" onClick={addComponent}>+</button>
                </div>

                <UnderButton button_title="??????" state="notMove" action={handelSurvey}></UnderButton>
            </div>
        </div>
    )
}