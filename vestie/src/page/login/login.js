import UnderLineInput from "../../component/input/underline/underLineInput";
import Header from "../../component/header/header";
import UnderButton from "../../component/under_button/under_button";
import "./login.css"
export const Login = () => {
    return (
        <div className="login_box">
            <Header></Header>
            <div className="input_box">
                <div className="login_username_input">아이디</div>
                <div className="underline_input_box">
                    <UnderLineInput></UnderLineInput>
                </div>
            </div>
            <div className="input_box">
                <div className="login_password_input">비밀번호</div>
                <div className="underline_input_box">
                    <UnderLineInput></UnderLineInput>
                </div>
            </div>
            
            <div className="check_before_submit_bottom_button_box">
                <UnderButton button_title="로그인" next_page=""></UnderButton>
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