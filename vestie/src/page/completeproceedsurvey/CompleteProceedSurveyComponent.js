import Header from "../../component/header/header";
import CompleteProceedSurveyComponent from "../../component/completeproceedsurvey/completeProceedSurveyComponent";


var titleText = "답변 등록 완료";
const presentLocation = window.location.href;
if(presentLocation.search("register")){
    titleText="설문 등록 완료";
}

export const CompleteProceedSurvey = () => {
    return (
        <div>
            <Header></Header>
            <CompleteProceedSurveyComponent titleText={titleText}></CompleteProceedSurveyComponent>
        </div>
    );
}

export default CompleteProceedSurvey;
