import React from 'react';
import ClosedSurveyItem from "./closedSurveyItem";


export const ClosedSurveyItemList = ({ surveys }) => {
  return (
      <div>
        {surveys.map(survey => (
          <ClosedSurveyItem survey={survey} key={survey.id} />
        ))}
      </div>
    );
}

export default ClosedSurveyItemList;