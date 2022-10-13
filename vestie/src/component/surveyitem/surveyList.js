import React from 'react';
import SurveyItem from "./surveyItem";


export const SurveyList = ({ surveys }) => {
  
    return (
        <div>
          {surveys.map(survey => (
            <SurveyItem survey={survey} key={survey.id} />
          ))}
        </div>
      );
}

export default SurveyList;