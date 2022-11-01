import Header from "../../component/header/header";
import CompleteProceedSurveyComponent from "../../component/completeproceedsurvey/completeProceedSurveyComponent";
import "./CompleteComponent.css";

var titleText = "답변 등록 완료";
const presentLocation = window.location.href;
if(presentLocation.search("register")){
    titleText="설문 등록 완료";
}

export const CompleteProceedSurvey = () => {
    const moveToMain = (e) => {
        e.preventDefault();
        window.location.href = "/";
    }
    return (
        <div className>
            <Header></Header>
            <div className="completeComponent" onClick={moveToMain}>
                <CompleteProceedSurveyComponent titleText={titleText}></CompleteProceedSurveyComponent>
            </div>
        </div>
    );
}

export default CompleteProceedSurvey;
