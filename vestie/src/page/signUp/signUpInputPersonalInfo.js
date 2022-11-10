import UnderLineInput from "../../component/input/underline/underLineInput";
import Header from "../../component/header/header";
import UnderButton from "../../component/under_button/under_button";
import "./signUpInputPersonalInpo.css"
import ChoiceCmp from "../../component/question/chocieCmp/choiceComponent";

import CircleButton from "../../component/circleButton/circleButton";
import { useNavigate,useLocation } from 'react-router-dom';
import React,{useState} from "react";
import axios from 'axios';


export const SignUpInputPersonalInfo = () => {
    const [realName, setRealName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userGender, setUserGender] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignUp = () =>{

        axios.post('http://13.209.169.33:8080/api/v1/signUp', {
            "name": realName,
            "age": userAge,
            "gender": userGender,
            "birthDate":"",
            "username": location.state.username,
            "password": location.state.password
        }).then(v =>{
            alert("회원가입을 축하드립니다.");
            window.location.href = "/login";
        },
        e =>{
            alert("서버 장애");
            console.error(e);
        })
    }

    return (
        <div className="signup_box">
            <Header></Header>
            <div className="input_box">
                <div className="signUpTitle">회원가입</div>

                <div className="signup_username_input">이름</div>
                <div className="underline_input_box">
                    <UnderLineInput acting ={(e) => {setRealName(e.target.value);}}></UnderLineInput>
                </div>
            </div>
            <div className="input_box">
                <div className="signup_password_confirm_input">나이</div>
                <div className="underline_input_box">
                    <UnderLineInput acting ={(e) => {setUserAge(e.target.value);}}></UnderLineInput>
                </div>
            </div>
            <div className="input_box">
                <div className="signup_gender_text">성별</div>
                <div className="signup_gender_button_box">
                    {/* <CircleButton text={"남성"} acting ={(e) => {setUserGender("MAN");}} color={"blue"}></CircleButton>
                    <CircleButton text={"여성"} acting ={(e) => {setUserGender("WOMAN");}} color={"pink"}></CircleButton> */}
                    <ChoiceCmp btn_text="남성" value ="MAN" groupName="genderConstraint" action={(e)=>{setUserGender(e.target.value)}}></ChoiceCmp>
                    <ChoiceCmp btn_text="여성" value ="WOMAN" groupName="genderConstraint" action={(e)=>{setUserGender(e.target.value)}}></ChoiceCmp>
                
                </div>
            </div>


            <div className="check_before_submit_bottom_button_box">
                <UnderButton button_title="완료" next_page="login" action={handleSignUp} state="notMove"></UnderButton>
            </div>
        </div>

    );
}

export default SignUpInputPersonalInfo;