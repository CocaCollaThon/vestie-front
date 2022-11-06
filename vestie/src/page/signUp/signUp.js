import UnderLineInput from "../../component/input/underline/underLineInput";
import Header from "../../component/header/header";
import "./signUp.css"
import UnderButton from "../../component/under_button/under_button";
import React, {useState} from "react";
let sessionStorage = window.sessionStorage;




export const SignUp = () => {
    const [userID, setUserID] = useState('');
    const [userPW, setUserPW] = useState('');
    const [checkUserPW, setCheckUserPW] = useState('');
    const [checkUserPWText, setCheckUserPWText] = useState('');


    const saveToSessionStorage=()=>{
        sessionStorage.setItem("userName",userID);
        sessionStorage.setItem("password",userPW);
        window.location.href = "/signup_input_personal_info_page";

    }


    return (
        <div className="signup_box">
            <Header></Header>
            <div className="input_box">
                <div className="signUpTitle">회원가입</div>
                <div className="signup_username_input">아이디</div>
                <div className="underline_input_box">
                    <UnderLineInput acting ={(e) => {setUserID(e.target.value);}}></UnderLineInput>
                </div>
            </div>
            <div className="input_box">
                <div className="signup_password_input">비밀번호</div>
                <div className="underline_input_box">
                    <UnderLineInput acting ={(e) => {setUserPW(e.target.value);}}></UnderLineInput>
                </div>
            </div>
            <div className="input_box">
                <div className="signup_password_confirm_input">비밀번호 재확인</div>
                <div className="underline_input_box">
                    <UnderLineInput acting ={(e) => {setCheckUserPW(e.target.value);}}></UnderLineInput>
                    <div className="text_checkPW_box">
                        {checkUserPWText}
                    </div>
                </div>
            </div>
            <div className="check_before_submit_bottom_button_box">
                <UnderButton button_title="다음" next_page="signup_input_personal_info_page" action={saveToSessionStorage} state="notMove"></UnderButton>
            </div>
        </div>

    );
}

export default SignUp;