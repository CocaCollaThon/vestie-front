import Header from "../../component/header/header";
import UnderButton from "../../component/under_button/under_button";
import ChoiceCmp from "../../component/question/chocieCmp/choiceComponent";
import "./registerServey.css";
import React,{useState} from "react";
import { useNavigate,useLocation } from 'react-router-dom';

export const SurveySetTarget = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [genderConstraint, setGenderConstraint] = useState('');
    const [AgeConstraint, setAgeConstraint] = useState('');

    sessionStorage.setItem("AgeConstraint",AgeConstraint);
    sessionStorage.setItem("genderConstraint",genderConstraint);

    const handleSurvey=()=>{
        navigate('/register_questions', {
            state: {
                endDate: location.state.endDate,
                title: location.state.title,
                expectedTime : location.state.expectedTime,
                minAgeConstraint: AgeConstraint,
                maxAgeConstraint : (AgeConstraint==0) ? 500 :AgeConstraint+9,
                genderConstraint : genderConstraint
            }
        });
    }


    return (
        
        <div>
            <Header></Header>
            
            <div className="register_contents">
                <div className="page_title">
                    조사 대상
                </div>
                <div className="data_input_box">
                    <div className="data_input_title">성별</div>

                    <div className="check_radio_btns">
                        <ChoiceCmp btn_text="남성" value ="ONLY_MAN" groupName="genderConstraint" action={(e)=>{setGenderConstraint(e.target.value)}}></ChoiceCmp>
                        <ChoiceCmp btn_text="여성" value ="ONLY_WOMAN" groupName="genderConstraint" action={(e)=>{setGenderConstraint(e.target.value)}}></ChoiceCmp>
                        <ChoiceCmp btn_text="둘 다" value ="NO_CONSTRAINT" groupName="genderConstraint" action={(e)=>{setGenderConstraint(e.target.value)}}></ChoiceCmp>
                    </div>

                    <hr className="dividing_line"></hr>

                </div>


                <div className="data_input_box">
                    <div className="data_input_title">나이</div>

                    <div className="check_radio_btns">
                        <ChoiceCmp btn_text="10대" value ="10" groupName="ageConstraint" action={(e)=>{setAgeConstraint(e.target.value)}}></ChoiceCmp>
                        <ChoiceCmp btn_text="20대" value ="20" groupName="ageConstraint" action={(e)=>{setAgeConstraint(e.target.value)}}></ChoiceCmp>
                    </div>

                    <div className="check_radio_btns">
                        <ChoiceCmp btn_text="30대" value ="30" groupName="ageConstraint" action={(e)=>{setAgeConstraint(e.target.value)}}></ChoiceCmp>
                        <ChoiceCmp btn_text="40대" value ="40" groupName="ageConstraint" action={(e)=>{setAgeConstraint(e.target.value)}}></ChoiceCmp>
                    </div>

                    <div className="check_radio_btns">
                        <ChoiceCmp btn_text="50대" value ="50" groupName="ageConstraint" action={(e)=>{setAgeConstraint(e.target.value)}}></ChoiceCmp>
                        <ChoiceCmp btn_text="상관 없음" value ="0" groupName="ageConstraint" action={(e)=>{setAgeConstraint(e.target.value)}}></ChoiceCmp>
                    </div>

                    <hr className="dividing_line"></hr>
                </div>

                
            </div>
            <div className="under_btn_box">
                <div className="under_btn">
                    <UnderButton button_title="다음" action={handleSurvey} state ="notMove"></UnderButton>
                </div>
            </div>
        </div>
    );
}

export default SurveySetTarget;
