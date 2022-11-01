import Header from "../../component/header/header";
import {UnderButton} from '../../component/under_button/under_button';
import "./checkBeforeSubmit.css";

const title = "답변을 제출하시겠습니까?";

export const CheckBeforeSubmit = () => {
    return (
        <div className="check_before_submit_box">
            <Header></Header>
            <div className="check_before_submit_box_top">
                <div className="check_before_submit_text_box">
                    <div className="check_before_submit_text">{title}</div>
                </div>
                <div className="check_before_submit_answer_num_box">
                    답변문항
                    <span className="check_before_submit_answer_num">128</span>
                </div>
            </div>

            <div className="check_before_submit_box_bottom">
                <div className="check_before_submit_gave_point_box">
                    제공 포인트 <span className="check_before_submit_gave_point">10</span>p
                </div>
                <div className="check_before_submit_bottom_button_box">
                    <UnderButton button_title="제출" next_page="complete_register"></UnderButton>
                </div>
            </div>
        </div>
    );
}

export default CheckBeforeSubmit;