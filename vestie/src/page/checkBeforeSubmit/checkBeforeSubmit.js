import Header from "../../component/header/header";
import { UnderButton } from '../../component/under_button/under_button';

export function CheckBeforeSubmit() {
  return (
    <div className="check_befor_submit_box">
      <Header></Header>
      <div className="check_befor_submit_text_box">
            <div className="check_befor_submit_text">답변을 제출하시겠습니까?</div>
            <div className="check_befor_submit_anwer_num_box">
                답변문항 <span className="check_befor_submit_anwer_num">128</span>
            </div>
      </div>
      <div className="check_befor_submit_gave_point_box">
          제공 포인트 <span className="check_befor_submit_gave_point_box">10</span>p
      </div>

      <UnderButton button_title="제출"></UnderButton>
    </div>
  );
}

export default CheckBeforeSubmit;