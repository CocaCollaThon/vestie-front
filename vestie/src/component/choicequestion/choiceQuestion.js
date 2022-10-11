import {Component} from "react";
import './style.css'

export class ChoiceQuestion extends Component {
    render() {
        return <div className="question_item_box">

            {/* 질문 이름 */}
            <div className="question_name">
                <span className="question_mark">Q.</span>
                오늘 혜진이가 먹고 싶었던 음식을 하나만 고르시오
            </div>

            {/* 질문 고르는 칸(객관식) */}
            <div className="choice_list">

                {/* 질문 아이템 */}
                <div className="choice_item"  onClick={clickName}>
                    <input className="choice_button" type="radio" name="Q1"/>
                    <span className="item_name">마리조나블루</span>
                </div>

                <div className="choice_item"  onClick={clickName}>
                    <input className="choice_button" type="radio" name="Q1"/>
                    <span className="item_name">킹컁쿙우이오자오마잊</span>
                </div>

                <div className="choice_item"  onClick={clickName}>
                    <input className="choice_button" type="radio" name="Q1"/>
                    <span className="item_name">김밥</span>
                </div>

                <div className="choice_item"  onClick={clickName}>
                    <input className="choice_button" type="radio" name="Q1"/>
                    <span className="item_name">밤김</span>
                </div>

                <div className="choice_item"  onClick={clickName}>
                    <input className="choice_button" type="radio" name="Q1"/>
                    <span className="item_name">초밥</span>
                </div>

                <div className="choice_item" onClick={clickName}>
                    <input className="choice_button" type="radio" name="Q1"/>
                    <span className="item_name">아프리카 기분좋은 왕호랑이</span>
                </div>
            </div>
        </div>
    }
}

// 체크박스가 체그되었는지 확인
function isChecked(checkBox) {
    return checkBox.getAttribute("checked") != null;
}

const clickName = (e) => {

    // 모든 체크박스 가져오기
    const allChoice = e.currentTarget.parentNode.getElementsByClassName("choice_button")

    // 현재 체크박스 가져오기
    const currentCheck = e.currentTarget.getElementsByClassName("choice_button")[0]


    if (isChecked(currentCheck)) { // 체크된 경우 체크 제거
        currentCheck.removeAttribute("checked")
        return
    }

    // 체그되지 않은 경우 다른 체크된걸 모두 지우고, 현재 체크박스만 체크하기
    for (let i = 0; i < allChoice.length; i++) {
        allChoice[i].removeAttribute("checked")
    }
    currentCheck.setAttribute("checked", "checked")
}
