import {Component} from "react";
import './under_button_style.css'

function Button({ disabled, children }) {
    return <button disabled={disabled}>{children}</button>;
  }

export function UnderButton(props){
    
    return (<div className="under_btn_box">
            <button className="under_btn">{props.button_title}</button>
        </div>);
    
}

export default UnderButton;
