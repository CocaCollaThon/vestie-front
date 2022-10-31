import Header from "../../component/header/header";
import UnderButton from "../../component/under_button/under_button";
import UnderLineInput from "../../component/input/underline/underLineInput";
import ChoiceCmp from "../../component/question/chocieCmp/choiceComponent";
import Dropdown from "../../component/dropdown/dropdown";



import "./registerServey.css";

export function ServeySetTarget() {
  return (
    <div>
      <Header></Header>
    <div  className="page_title">
        조사 대상
    </div>
      <div className="regist_contents">

        <div className="data_input_box">
          <div className="data_input_title">성별</div>
          
          <div className="check_radio_btns">
              <ChoiceCmp choice_text="남성"></ChoiceCmp>
              <ChoiceCmp choice_text="여성"></ChoiceCmp>
          </div>

          <hr className="dividing_line"></hr>

        </div>


        <div className="data_input_box">
          <div className="data_input_title">나이</div>

          <div className="check_radio_btns">
          <ChoiceCmp choice_text="10대"></ChoiceCmp>
          <ChoiceCmp choice_text="20대"></ChoiceCmp>
          </div>
          <div className="check_radio_btns">
          <ChoiceCmp choice_text="30대"></ChoiceCmp>
          <ChoiceCmp choice_text="40대"></ChoiceCmp>
          </div >
          <div className="check_radio_btns">
          <ChoiceCmp choice_text="50대"></ChoiceCmp>

          </div>

          <hr className="dividing_line"></hr>

        </div>

        <div className="data_input_box">
          <div className="data_input_title">조사지역</div>
          <div className="dropdown_box">
            <Dropdown></Dropdown>
          </div>
        </div>
      </div>

      <UnderButton button_title="다음" next_page="register_questions"></UnderButton>

    </div>
  );
}

export default ServeySetTarget;