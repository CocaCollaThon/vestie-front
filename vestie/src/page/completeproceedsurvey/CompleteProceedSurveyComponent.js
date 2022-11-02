import Header from "../../component/header/header";
import CompleteProceedSurveyComponent from "../../component/completeproceedsurvey/completeProceedSurveyComponent";
import "./CompleteComponent.css";

var titleText = "답변 제출 완료";
var point = "10";
var point_text ="지급 완료";
const presentLocation = window.location.href;
if(presentLocation.search("register")>0){
    titleText="설문 등록 완료";
    var point = "50";
    var point_text ="차감 완료";
}

export const CompleteProceedSurvey = () => {
    const moveToMain = () => {
        window.location.href = "/";
    }
    return (
        <div className>
            <Header></Header>
            <div className="completeComponent" onClick={moveToMain}>
                <CompleteProceedSurveyComponent titleText={titleText} point={point} point_text={point_text}></CompleteProceedSurveyComponent>
            </div>
        </div>
    );
}

export default CompleteProceedSurvey;
