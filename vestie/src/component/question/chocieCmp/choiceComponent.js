import "./choiceCmp.css";

export const ChoiceCmp = (prop) => {
    return (
        <div>
            <input className="choice_button" type="radio" value={prop.value}   onChange={prop.action}/>
            <label className="item_name">{prop.btn_text}</label>
        </div>
    );
}

export default ChoiceCmp;
