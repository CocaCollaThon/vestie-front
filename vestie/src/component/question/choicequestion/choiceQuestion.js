import {useState, useEffect} from "react";
import "./style.css";
import {ChoiceCmp} from "../chocieCmp/choiceComponent";



export const ChoiceQuestion = ({datas}) => {
    
    const [selectedOption,setSelectedOption] = useState();
    const [choiceOptions,setChoiceOptions] = useState([]);
    
    const handleClickRadioButton =(e) => {
        setSelectedOption(Number(e.target.value));
    }


    const setChoiceOptionIdList = () =>{
        const choiceOptionIdList = new Array();
        choiceOptionIdList.push(selectedOption);
    }

    useEffect(()=>{
        setChoiceOptions(datas.choiceOptionResponses)
    },[]);

    const setChoiceAnswer= ()=>{
        const choiceOptionIdList = new Array();
        choiceOptionIdList.push(selectedOption);

        const choiceAnswer = new Object();
        choiceAnswer.choiceOptionIdList = choiceOptionIdList;
        choiceAnswer.surveyQuestionId = datas.id;

        localStorage.setItem("choiceAnswer_"+datas.questionOrder,JSON.stringify(choiceAnswer));
        
    }


    useEffect(()=>{
        // setChoiceOptionIdList();
        setChoiceAnswer()
       console.log(datas.id);
       
    },[selectedOption]);

    return (
        <div className="question_item_box">
            <div className="question_name">
                <span className="question_mark">{datas.questionOrder}</span>
                {datas.title}
            </div>

            <div className="choice_list">
                {choiceOptions.map(option =>{
                    return (
                        <div className="choice_item">
                        <ChoiceCmp value={option.optionId} checked={option.optionId} action={handleClickRadioButton} btn_text={option.name} groupName={datas.questionOrder}></ChoiceCmp>
                </div>
                    );
                })}
               
            </div>
        </div>
    );
}

export default ChoiceQuestion;
