import UnderLineInput from "../../component/input/underline/underLineInput";
import Header from "../../component/header/header";
import UnderButton from "../../component/under_button/under_button";
import "./signUpInputPersonalInpo.css"
import CircleButton from "../../component/circleButton/circleButton";

export const SignUpInputPersonalInfo = () => {
    return (
        <div className="signup_box">
            <Header></Header>
            <div className="input_box">
                <div className="signup_username_input">이름</div>
                <div className="underline_input_box">
                    <UnderLineInput></UnderLineInput>
                </div>
            </div>
            <div className="input_box">
                <div className="signup_password_input">직업</div>
                <div className="underline_input_box">
                    <UnderLineInput></UnderLineInput>
                </div>
            </div>
            <div className="input_box">
                <div className="signup_password_confirm_input">나이</div>
                <div className="underline_input_box">
                    <UnderLineInput></UnderLineInput>
                </div>
            </div>

            <div className="input_box">
                <div className="signup_gender_text">성별</div>
                <div className="signup_gender_button_box">
                    <CircleButton text={"남성"}></CircleButton>
                    <CircleButton text={"여성"} color={"pink"}></CircleButton>
                </div>
            </div>


            <div className="check_before_submit_bottom_button_box">
                <UnderButton button_title="완료" next_page="login"></UnderButton>
            </div>
        </div>
        //  아이디
        // 비빈번호
        // 재확인
    );
}

export default SignUpInputPersonalInfo;