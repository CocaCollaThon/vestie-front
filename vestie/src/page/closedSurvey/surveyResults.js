import Header from "../../component/header/header";
import UnderButton from "../../component/under_button/under_button";
import SurveyResultItem from "../../component/surveyResultItem/surveResultList"
import "./surveyResults.css";
import { useNavigate } from 'react-router-dom';

export const SurveyResults = () => {

    const navigate = useNavigate();
    
    const surveyResultList = [
        {
            "answerTitle": "무슨 붕어빵을 좋아하시나요",
            "anwserResults": [
                {choiceQuestion : "슈붕", numOfAnswers : 3 },
                {choiceQuestion : "팥붕", numOfAnswers : 5 },
                {choiceQuestion : "피자붕",numOfAnswers : 1},
                {choiceQuestion : "고구마붕", numOfAnswers : 4},
            ],
        },{
            "answerTitle": "종강을 원하시나요?",
            "anwserResults": [
                {choiceQuestion : "네", numOfAnswers : 3 },
                {choiceQuestion : "네니요", numOfAnswers : 5 },
                {choiceQuestion : "네네네",numOfAnswers : 5},
            ],
        },
        
    ];

    const moveTo = () =>{
        navigate('/closedSurvey');
    }

    return (

        <div>
            <Header></Header>

            <div className="surveyResultDiv">
                <div className="surveyResultText">
                    <span>설문 결과</span>
                </div>
                <div className="surveyResults">
                    <div className="surveyParticipaionDiv">참여 인원 : <span>13</span>명</div>

                    <div className="gendeDiv">
                            <div className="gender_man">
                                남성 <span>6</span>명
                            </div>
                            <div className="gender_woman">
                                여성<span>7</span>명
                            </div>
                    </div>
                </div>

                <div className="resultDataDiv">
                    <div className="resultDataText"><span>응답</span></div>

                    <div className="resultDataList">
                        <div className="resultDatas">
                        <div>
                            <div className="resultDataTitleDiv">
                                <ol className="resultOrderedList">
                            {surveyResultList.map((data)=>{
                                 return(
                                    <li className="resultOrderedListComponent">
                                    <span className="answerTitle">{data.answerTitle}</span>
                                        <SurveyResultItem resultList = {data.anwserResults}></SurveyResultItem>
                                    </li>
                                    );
                                })
                            }
                                </ol>
                            </div>
                            <div className="resultDataResultDiv">
                                
                            </div>
                        </div>
                                    
                           
                        </div>
                    </div>
                </div>

            </div>
            <div className="under_btn_box">
                <div className="under_btn">
                    <UnderButton button_title="나가기"action={moveTo} state ="notMove"></UnderButton>
                </div>
            </div>
        </div>
    );
}

export default SurveyResults;