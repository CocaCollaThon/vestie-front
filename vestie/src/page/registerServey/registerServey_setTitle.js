import Header from "../../component/header/header";
import UnderButton from "../../component/under_button/under_button";
import UnderLineInput from "../../component/input/underline/underLineInput";
import "./registerServey.css";

import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';



export const SurveySetTitle = () => {
    const navigate = useNavigate();

    const [surveyTitle, setSurveyTitle] = useState('');
    const [surveyDeadLine, setSurveyDeadLine] = useState('');
    const [expectedTime, setExpectedTime] = useState('');

    const handleSurvey = () =>{
        navigate('/register_setTarget', {
            state: {
                endDate: surveyDeadLine,
                title: surveyTitle,
                expectedTime : expectedTime
            }
        });
        

    }
    return (
        <div>
            <Header></Header>
            <div className="register_contents">
                <div className="data_input_box">
                    <div className="data_input_title">설문 제목</div>
                    <UnderLineInput acting ={(e) => {setSurveyTitle(e.target.value);}}></UnderLineInput>
                </div>

                <div className="data_input_box">
                    <div className="data_input_title">설문 기간</div>
                    <div>
                        <input type="date" className="deadline_input" onChange={(e) => {setSurveyDeadLine(e.target.value);}}></input>
                    </div>
                    <div>
                        <hr className="dividing_line"></hr>
                    </div>
                </div>

                <div className="data_input_box">
                    <div className="data_input_title">예상 소요 시간</div>
                    <div className="required_time_input">
                        <UnderLineInput acting ={(e) => {setExpectedTime(e.target.value);}}></UnderLineInput>
                        분
                    </div>
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

export default SurveySetTitle;
