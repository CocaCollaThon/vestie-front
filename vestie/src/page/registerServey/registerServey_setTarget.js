import Header from "../../component/header/header";
import UnderButton from "../../component/under_button/under_button";
import ChoiceCmp from "../../component/question/chocieCmp/choiceComponent";
import Dropdown from "../../component/dropdown/dropdown";
import "./registerServey.css";
import React,{useState} from "react";
import axios from 'axios';


export const SurveySetTarget = () => {
    const [genderConstraint, setGenderConstraint] = useState('');
    const [minAgeConstraint, setMinAgeConstraint] = useState('');
    const [maxAgeConstraint, setMaxAgeConstraint] = useState('');
    const [userAge, setUserPW] = useState('');


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
                        <ChoiceCmp btn_text="남성" value ="MAN"></ChoiceCmp>
                        <ChoiceCmp btn_text="여성" value ="WOMAN"></ChoiceCmp>
                    </div>

                    <hr className="dividing_line"></hr>

                </div>


                <div className="data_input_box">
                    <div className="data_input_title">나이</div>

                    <div className="check_radio_btns">
                        <ChoiceCmp btn_text="10대"></ChoiceCmp>
                        <ChoiceCmp btn_text="20대"></ChoiceCmp>
                    </div>

                    <div className="check_radio_btns">
                        <ChoiceCmp btn_text="30대"></ChoiceCmp>
                        <ChoiceCmp btn_text="40대"></ChoiceCmp>
                    </div>

                    <div className="check_radio_btns">
                        <ChoiceCmp btn_text="50대"></ChoiceCmp>
                    </div>

                    <hr className="dividing_line"></hr>
                </div>

                <div className="data_input_box">
                    <div className="data_input_title">조사지역</div>
                    <div className="dropdown_box">
                        <Dropdown></Dropdown>
                    </div>
                </div>
            </div>
            <div className="under_btn_box">
                <div className="under_btn">
                    <UnderButton button_title="다음" next_page="register_questions"></UnderButton>
                </div>
            </div>
        </div>
    );
}

export default SurveySetTarget;
