import Header from "../../component/header/header";
import {UnderButton} from '../../component/under_button/under_button';

var title = "답변을 제출하시겠습니까?";

export const CheckBeforeSubmit = () => {
    const presentLocation =window.location.href;

    if(presentLocation.search("register")){
        title="설문을 등록하시겠습니까?";
    }

    return (
        <div className="check_before_submit_box">
            <Header></Header>
            
            <div className="check_before_submit_text_box">
                <div className="check_before_submit_text">{title}</div>
                <div className="check_before_submit_answer_num_box">
                    답변문항 <span className="check_before_submit_answer_num">128</span>
                </div>
            </div>
            <div className="check_before_submit_gave_point_box">
                제공 포인트 <span className="check_before_submit_gave_point_box">10</span>p
            </div>

            <UnderButton button_title="제출" next_page="complete_register"></UnderButton>
        </div>
    );
}

export default CheckBeforeSubmit;
