import React, { useState, useEffect } from "react";



export const MultiChoiceQuestion = () => {
    const [checkedInputs, setCheckedInputs] = useState([]);

    const changeHandler = (checked, id) => {
        if (checked) {
          setCheckedInputs([...checkedInputs, id]);
        } else {
          // 체크 해제
          setCheckedInputs(checkedInputs.filter((el) => el !== id));
        }
      };

      const handleClickedCheckBox =(e)=>{
        changeHandler(e.currentTarget.checked, e.target.id);
      }
    

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
                    <input className="choice_button" type="checkbox" id ="1" 
                    onChange={handleClickedCheckBox}
                      checked={checkedInputs.includes("1") ? true : false}
                      />
                    <label className="item_name">마리조나블루</label>
                </div>

                <div className="choice_item">
                    <input className="choice_button" type="checkbox" id ="2" 
                    onChange={handleClickedCheckBox}
                      checked={checkedInputs.includes("2") ? true : false}
                      />
                    <label className="item_name">무야효</label>
                </div>

                
            </div>
        </div>
    );
}

export default MultiChoiceQuestion;