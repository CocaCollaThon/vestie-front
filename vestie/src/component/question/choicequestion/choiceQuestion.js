import {useState} from "react";
import "./style.css";



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
                오늘 혜진이가 먹고 싶었던 음식을 하나만 고르시오
            </div>

            {/* 질문 고르는 칸(객관식) */}
            <div className="choice_list">
                {/* 질문 아이템 */}
                <div className="choice_item">
                    <input className="choice_button" type="radio" value="1" checked={x ==="1"}  onChange={handleClickRadioButton}/>
                    <label className="item_name">동해</label>
                </div>

                <div className="choice_item" >
                    <input className="choice_button" type="radio" value="2" checked={x ==="2"} onChange={handleClickRadioButton}/>
                    <label className="item_name">홀롤로롤로로</label>
                </div>

                <div className="choice_item" >
                    <input className="choice_button" type="radio" value="3" checked={x ==="3"} onChange={handleClickRadioButton}/>
                    <label className="item_name">알리오올리오</label>
                </div>

               
            </div>
        </div>
    );
}

export default ChoiceQuestion;
// 체크박스가 체그되었는지 확인
