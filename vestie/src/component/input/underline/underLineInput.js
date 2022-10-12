import "./style.css";



 export function UnderLineInput(){
    return (<div className="underline_input_box">
        <div className="underline_Question_box">
            <strong className="underline_Question">질문</strong>
        </div>
        <div className="underline_box">
            <input className="underline"/>
        </div>
        </div>
    );
    
}
export default UnderLineInput;

