import UnderLineInput from "../../component/input/underline/underLineInput";
import Header from "../../component/header/header";
import "./signUp.css"
import UnderButton from "../../component/under_button/under_button";

export const SignUp = () => {
    return (
        <div className="signup_box">
            <Header></Header>
            <div className="input_box">
                <div className="signup_username_input">아이디</div>
                <div className="underline_input_box">
                    <UnderLineInput></UnderLineInput>
                </div>
            </div>
            <div className="input_box">
                <div className="signup_password_input">비밀번호</div>
                <div className="underline_input_box">
                    <UnderLineInput></UnderLineInput>
                </div>
            </div>
            <div className="input_box">
                <div className="signup_password_confirm_input">비밀번호 재확인</div>
                <div className="underline_input_box">
                    <UnderLineInput></UnderLineInput>
                </div>
            </div>
            <div className="check_before_submit_bottom_button_box">
                <UnderButton button_title="다음" next_page="signup_input_personal_info_page"></UnderButton>
            </div>
        </div>
        //  아이디
        // 비빈번호
        // 재확인
    );
}

export default SignUp;