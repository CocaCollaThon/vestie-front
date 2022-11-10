import UnderLineInput from "../../input/underline/underLineInput";

export const ShortAnswerQuestion = ({datas}) => {
    return (
        <div className="question_item_box">

            {/* 질문 이름 */}
            <div className="question_name">
                <span className="question_mark">{datas.questionOrder}</span>
                {datas.title}
            </div>

            {/* 답변 작성하는 칸 */}
            <UnderLineInput></UnderLineInput>
        </div>
    );
}

export default ShortAnswerQuestion;
