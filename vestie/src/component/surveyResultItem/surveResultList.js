import SurveyResultItem from "./surveyResultItem";

export const SurveyResultList=(props)=>{
    
    return (
        <div>
            <ol>
                <SurveyResultItem resultList={props.resultList}></SurveyResultItem>
            </ol>
        </div>
    );

}

export default SurveyResultList;