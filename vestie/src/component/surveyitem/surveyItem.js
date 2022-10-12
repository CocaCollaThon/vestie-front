import {Component} from "react";
import './style.css'

export class SurveyItem extends Component {
    render() {
        return <div className="survey_item_box">

            {/* 설문의 이름과 날짜 제공 */}
            <div className="survey_item_top_box">
                {/* 설문의 이름 */}
                <div className="survey_item_name_box">
                    SSI 설문조사 참여 수락
                </div>
                {/* 설문 진행날짜 */}
                <div className="survey_item_date_box">
                    ~2022-10-05
                </div>
            </div>

            {/* 문항 수와 포인트 정보 제공 */}
            <div className="survey_item_bottom_box">
                {/* 문항 수 */}
                <div className="survey_item_question_count_box">
                    <span className="survey_item_question_count">128</span> 문항
                </div>

                {/* 포인트 정보 */}
                <div className="survey_item_give_point_box">
                    <span className="survey_item_give_point">10</span> p
                </div>
            </div>
        </div>
    }
}