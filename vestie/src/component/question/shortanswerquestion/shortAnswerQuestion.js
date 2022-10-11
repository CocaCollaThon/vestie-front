import {Component} from "react";
import {UnderLineInput} from "../../input/underline/underLineInput";

export class ShortAnswerQuestion extends Component {
    render() {
        return <div className="question_item_box">

            {/* 질문 이름 */}
            <div className="question_name">
                <span className="question_mark">Q.</span>
                오늘 혜진이가 먹고 싶었던 음식을 단답으로 작성하시오
            </div>

            {/* 답변 작성하는 칸 */}
            <UnderLineInput></UnderLineInput>
        </div>
    }
}