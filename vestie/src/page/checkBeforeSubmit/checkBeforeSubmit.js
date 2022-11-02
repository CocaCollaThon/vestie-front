import Header from "../../component/header/header";
import {UnderButton} from '../../component/under_button/under_button';
import "./checkBeforeSubmit.css";

var title = "";
var context="";
var btn_text="";
var point_text="";
var point="";

export const CheckBeforeSubmit = () => {
    const presentLocation =window.location.href;
    const submitOrRegister=presentLocation.search("submit")>0 ? 1 : -1;
    

    if(submitOrRegister==-1){
        title="설문을 등록하시겠습니까?";
        context ="설문 문항";
        btn_text="등록";
        point_text="차감 포인트"
        point ="50";
    }else if(submitOrRegister==1){
        title = "답변을 제출하시겠습니까?";
        context ="답변문항";
        btn_text="제출";
        point_text="제공 포인트"
        point ="10";

    }

    return (
        <div className="check_before_submit_box">
            <Header></Header>
            <div className="check_before_submit_box_top">
                <div className="check_before_submit_text_box">
                    <div className="check_before_submit_text">{title}</div>
                </div>
                <div className="check_before_submit_answer_num_box">
                    {context}
                    <span className="check_before_submit_answer_num">128</span>
                </div>
            </div>

            <div className="check_before_submit_box_bottom">
                <div className="check_before_submit_gave_point_box">
                    {point_text} <span className="check_before_submit_gave_point">{point}</span>p
                </div>
                <div className="check_before_submit_bottom_button_out_box">
                    <div className="check_before_submit_bottom_button_box">
                        <UnderButton button_title={btn_text} next_page={submitOrRegister>0 ? "complete_submit" : "complete_register"}></UnderButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckBeforeSubmit;
