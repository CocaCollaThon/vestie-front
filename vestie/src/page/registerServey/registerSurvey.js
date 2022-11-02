import {useState} from "react"
import Header from "../../component/header/header";
import RegisterChoiceQuestion from "../../component/registerServey/registerChoiceQuestion";
import UnderButton from "../../component/under_button/under_button";
import {RegisterQuestionBox} from "../../component/registerServey/registerQuestionBox";

import "./registerServey.css";

export const RegisterSurvey = () => {
    const [numChildren, setNumChildren] = useState(0)
    const children = []

    for (let i = 1; i < numChildren; i++) {
        children.push(<RegisterQuestionBox num={i}/>)
    }

    const addComponent = () => {
        setNumChildren((count) => count + 1)
    }

    return (
        <div>
            <Header></Header>
            <div className="register_questions">
                <div className="page_title">
                    설문지 작성
                </div>

                <div>{children}</div>

                <div className="btn_add_question_box">
                    <button className="btn_add_question" onClick={addComponent}>+</button>
                </div>

                <UnderButton button_title="완료" next_page="check_before_register"></UnderButton>
            </div>
        </div>
    )
}