import "./style.css";


export const UnderLineInput = (prop) => {
    return (
        <div className="underline_input_box">
            <div className="underline_box">
                <input className="underline" onChange={prop.acting}/>
            </div>
        </div>
    );
}

export default UnderLineInput;