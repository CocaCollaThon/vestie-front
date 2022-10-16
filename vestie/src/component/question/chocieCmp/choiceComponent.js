import "./choiceCmp.css";


export const ChoiceCmp=(prop)=>{
    return(

        <div className="button_box">
        <input type="radio" /> 
        <span>{prop.choice_text}</span>
        </div>
    );

}
export default ChoiceCmp;
