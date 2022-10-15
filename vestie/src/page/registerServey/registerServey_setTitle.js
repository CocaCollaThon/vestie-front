import Header from "../../component/header/header";
import UnderButton from "../../component/under_button/under_button";
import UnderLineInput from "../../component/input/underline/underLineInput";


import "./registerServey.css";

export function ServeySetTitle() {
  return (
    <div>
      <Header></Header>
      <div className="regist_contents">

        <div className="data_input_box">
          <div className="data_input_title">설문 제목</div>
          <UnderLineInput></UnderLineInput>
        </div>

        <div className="data_input_box">
          <div className="data_input_title">설문 기간</div>
          <div>
            <input type="date" className="deadline_input"></input>
          </div>
          <div>
            <hr className="dividing_line"></hr>
          </div>
        </div>

        <div className="data_input_box">
          <div className="data_input_title">예상 소요 시간</div>
          <div className="required_time_input">
            <UnderLineInput></UnderLineInput>
            분
          </div>
        </div>
      </div>

      <UnderButton button_title="다음"></UnderButton>

    </div>
  );
}

export default ServeySetTitle;