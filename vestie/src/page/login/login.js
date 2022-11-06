import UnderLineInput from "../../component/input/underline/underLineInput";
import Header from "../../component/header/header";
import UnderButton from "../../component/under_button/under_button";
import "./login.css"
import React,{useState} from "react";
import axios from 'axios';


export const Login = () => {

    const [userID, setUserID] = useState('');
    const [userPW, setUserPW] = useState('');

    const hadleLogin = () =>{
        alert(userID);
        alert(userPW);
        
        axios.post('http://localhost:8080/api/v1/login ', {
            "username": userID,
            "password": userPW
        }).then(v =>{
            alert("로그인 되었습니다.");
            sessionStorage.setItem("userID", v.data.userID);
            sessionStorage.setItem("name", v.data.name);
            window.location.href = "/";
        },
        e =>{
            alert("서버 장애");
            console.error(e);
        })
    }

    return (
        <div className="login_box">
            <Header></Header>
            <div className="input_box">
                <div className="login_username_input">아이디</div>
                <div className="underline_input_box">
                    <UnderLineInput acting ={(e) => {setUserID(e.target.value);}}></UnderLineInput>
                </div>
            </div>
            <div className="input_box">
                <div className="login_password_input">비밀번호</div>
                <div className="underline_input_box">
                    <UnderLineInput acting ={(e) => {setUserPW(e.target.value);}}></UnderLineInput>
                </div>
            </div>
            
            <div className="check_before_submit_bottom_button_box">
                <UnderButton button_title="로그인" state ="notMove" action={hadleLogin}></UnderButton>
            </div>

            <div className="askToSignUpBox">
                <div className="askToSignUp">
                    <div className="askIDExist">
                        <span>아직 아이디가 없으신가요?</span>
                    </div>
                    <div className="moveToSignUp" onClick={(e)=>{window.location.href="./signup"}}>
                        <span>회원가입</span>
                    </div>
                </div>

            </div>
        </div>
       
    );
}

export default Login;