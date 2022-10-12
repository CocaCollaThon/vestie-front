import {Component} from "react";
import './style.css'

const getUnderlineInput=()=>{
    return(
        <input className="underline_input"/>
    );
}
const getQuestion=()=>{
    var Q="제목이지롱";
    return <strong>{Q}</strong>
}

export class UnderLineInput extends Component {
    render() {
        return <div className="underline_input_box">
            <div className="underline_Question_box">
                <strong className="underline_Question">질문</strong>
            </div>
            <div className="underline_box">
                <input className="underline"/>
            </div>
        </div>
    }
}