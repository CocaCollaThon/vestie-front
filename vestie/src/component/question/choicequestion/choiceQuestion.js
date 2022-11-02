import {useState} from "react";
import "./style.css";
import {ChoiceCmp} from "../chocieCmp/choiceComponent";




export const ChoiceQuestion = () => {
    
    const [x,setX] = useState([]);

    const handleClickRadioButton =(e) => {
        console.log(e.target.value);
        setX(e.target.value);

    }
    

    return (
        <div className="question_item_box">
            {/* 질문 이름 */}
            <div className="question_name">
                <span className="question_mark">Q.</span>
                오늘 혜진이가 듣고 싶은 노래를 한 가지 고르시오
            </div>

            {/* 질문 고르는 칸(객관식) */}
            <div className="choice_list">
                {/* 질문 아이템 */}
                <div className="choice_item">
                    <ChoiceCmp value="1" checked={x==="1"} action={handleClickRadioButton} btn_text="집에 가지마"></ChoiceCmp>
                </div>

                <div className="choice_item" >
                    <ChoiceCmp value="2" checked={x==="2"} action={handleClickRadioButton} btn_text="종강을 빌어줘"></ChoiceCmp>
                </div>

                <div className="choice_item" >
                    <ChoiceCmp value="3" checked={x==="3"} action={handleClickRadioButton} btn_text="이야이에오"></ChoiceCmp>

                </div>


               
            </div>
        </div>
    );
}

export default ChoiceQuestion;
// 체크박스가 체그되었는지 확인
