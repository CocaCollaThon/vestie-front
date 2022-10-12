import { useState } from "react";
import "./style.css";

function ChoiceQuestion() {
  const [singleSelectArr, setSingleSelectArr] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const checkSingleSelect = (index) => {
    const arr = singleSelectArr;
    arr.forEach((element) => {
      if (element === true) {
        element = false;
      }
    });
    arr[index] = true;

    setSingleSelectArr(arr);
  };
  return (
    <div className="question_item_box">
      {/* 질문 이름 */}
      <div className="question_name">
        <span className="question_mark">Q.</span>
        오늘 혜진이가 먹고 싶었던 음식을 하나만 고르시오
      </div>

      {/* 질문 고르는 칸(객관식) */}
      <div className="choice_list">
        {/* 질문 아이템 */}
        <div className="choice_item" onClick={() => checkSingleSelect(0)}>
          <input className="choice_button" type="radio" />
          <span className="item_name">마리조나블루</span>
        </div>

        <div className="choice_item" onClick={() => checkSingleSelect(1)}>
          <input className="choice_button" type="radio" />
          <span className="item_name">킹컁쿙우이오자오마잊</span>
        </div>

        <div className="choice_item" onClick={() => checkSingleSelect(2)}>
          <input className="choice_button" type="radio" />
          <span className="item_name">김밥</span>
        </div>

        <div className="choice_item" onClick={() => checkSingleSelect(3)}>
          <input className="choice_button" type="radio" />
          <span className="item_name">밤김</span>
        </div>

        <div className="choice_item" onClick={() => checkSingleSelect(4)}>
          <input className="choice_button" type="radio" />
          <span className="item_name">초밥</span>
        </div>

        <div className="choice_item" onClick={() => checkSingleSelect(5)}>
          <input className="choice_button" type="radio" />
          <span className="item_name">아프리카 기분좋은 왕호랑이</span>
        </div>
      </div>
    </div>
  );
}

export default ChoiceQuestion;
// 체크박스가 체그되었는지 확인
