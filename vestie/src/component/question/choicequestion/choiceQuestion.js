import {useState, useEffect} from "react";
import "./style.css";
import {ChoiceCmp} from "../chocieCmp/choiceComponent";






export const ChoiceQuestion = ({datas}) => {
    
    const [x,setX] = useState([]);
    const [choiceOptions,setChoiceOptions] = useState([]);
    // console.log(choiceOptions)
    
    useEffect(()=>{
        setChoiceOptions(datas.choiceOptionResponses)
    },[]);

    const handleClickRadioButton =(e) => {
        // console.log(e.target.value);
        setX(e.target.value);
    }
    

    return (
        <div className="question_item_box">
            {/* 질문 이름 */}
            <div className="question_name">
                <span className="question_mark">{datas.questionOrder}</span>
                {/* <span className="question_mark">Q</span> */}
                {datas.title}
                {/* wlfans */}
            </div>

            {/* 질문 고르는 칸(객관식) */}
            <div className="choice_list">
                {/* 질문 아이템 */}
                {choiceOptions.map(option =>{
                    return (
                        <div className="choice_item">
                        <ChoiceCmp value={option.optionId} checked={option.optionId} action={handleClickRadioButton} btn_text={option.name} groupName={datas.questionOrder}></ChoiceCmp>
                </div>
                    );
                })}
               
            </div>
        </div>
    );
}

export default ChoiceQuestion;
// 체크박스가 체그되었는지 확인
