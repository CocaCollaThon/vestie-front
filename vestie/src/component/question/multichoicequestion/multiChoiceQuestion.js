import { useState } from "react";

function MultiChoiceQuestion() {
  return (
    <div className="question_item_box">
      {/* 질문 이름 */}
      <div className="question_name">
        <span className="question_mark">Q.</span>
        오늘 혜진이가 먹고 싶었던 음식을 모두 고르시오
      </div>
      {/* 질문 고르는 칸(객관식) */}
      <div className="choice_list">
        {/* 질문 아이템 */}
        <div className="choice_item">
          <input className="choice_button" type="checkbox" />
          <span className="item_name">마리조나블루</span>
        </div>

        <div className="choice_item">
          <input className="choice_button" type="checkbox" />
          <span className="item_name">킹컁쿙우이오자오마잊</span>
        </div>

        <div className="choice_item">
          <input className="choice_button" type="checkbox" />
          <span className="item_name">김밥</span>
        </div>

        <div className="choice_item">
          <input className="choice_button" type="checkbox" />
          <span className="item_name">밤김</span>
        </div>

        <div className="choice_item">
          <input className="choice_button" type="checkbox" />
          <span className="item_name">초밥</span>
        </div>

        <div className="choice_item">
          <input className="choice_button" type="checkbox" />
          <span className="item_name">아프리카 기분좋은 왕호랑이</span>
        </div>
      </div>
    </div>
  );
}

export default MultiChoiceQuestion;
