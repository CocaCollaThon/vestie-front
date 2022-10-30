import Header from "../../component/header/header";
import RegisterChoiceQuestion from "../../component/registerServey/registerChoiceQuestion";
import RegisterShortAnwerQuestion from "../../component/registerServey/registerShortAnwerQuestion";
import UnderButton from "../../component/under_button/under_button";

import "./registerServey.css";

export function RegisterServey() {
  return (
    <div>
      <Header></Header>
      <div  className="page_title">
        설문지 작성
      </div>
      <RegisterChoiceQuestion num="1."></RegisterChoiceQuestion>
      <RegisterShortAnwerQuestion num="2."></RegisterShortAnwerQuestion>
      
      <div className="btn_add_question_box">
          <button className="btn_add_question">+</button>
      </div>
      <UnderButton button_title="완료" next_page="check_before_register"></UnderButton>

    </div>
  );
}

export default RegisterServey;