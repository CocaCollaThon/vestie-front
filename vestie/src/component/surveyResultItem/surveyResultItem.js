
export const SurveyResultItem=(props)=>{

    return(
        <div>
            <div>
            </div>
            <div>
                <ul>
                    {
                        props.resultList.map((answer)=>{
                            return(<li>{answer.choiceQuestion} : {answer.numOfAnswers}명</li>);
                        })
                    }
                    
                </ul>
            </div>
        </div>
    );
}


export default SurveyResultItem;