import {Component} from "react";
import './style.css'

const getServeyItemInfo=()=>{
    var title, deadline,Q_Num,point='';
    title ="a yo gg";
    deadline = "20220303";
    Q_Num ="123";
    point ="40";

    return title, deadline, Q_Num,point;
}

export class SurveyItem extends Component {

    state={
        title:'TITLE',
        deadline : '20000000',
        Q_Num : 'num',
        point : 'P'
    }

    setServeyItem = ()=>{
        var s_title, s_deadline,s_Q_Num,s_point = getServeyItemInfo();
        this.setState({
            title:s_title,
            deadline : s_deadline,
            Q_Num : s_Q_Num,
            point : s_point
        });
        return 0;
    }

    render() {
        return <div className="survey_item_box">

            {/* 설문의 이름과 날짜 제공 */}
            <div className="survey_item_top_box">
                {/* 설문의 이름 */}
                <div className="survey_item_name_box">
                    {this.state.title}
                </div>
                {/* 설문 진행날짜 */}
                <div className="survey_item_date_box">
                    ~{this.state.deadline}
                </div>
            </div>

            {/* 문항 수와 포인트 정보 제공 */}
            <div className="survey_item_bottom_box">
                {/* 문항 수 */}
                <div className="survey_item_question_count_box">
                    <span className="survey_item_question_count">
                        {this.state.Q_Num}
                        </span> 문항
                </div>

                {/* 포인트 정보 */}
                <div className="survey_item_give_point_box">
                    <span className="survey_item_give_point">
                        {this.state.point}
                        </span> p
                </div>
            </div>
        </div>
    }
}