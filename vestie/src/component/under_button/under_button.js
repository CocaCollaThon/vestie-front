import {Component} from "react";
import './under_button_style.css'

function Button({ disabled, children }) {
    return <button disabled={disabled}>{children}</button>;
  }

export const UnderButton=(props)=>{
  function moveToPage(e){
    window.location.href ="/"+props.next_page;
  }
    
    return (<div className="under_btn_box">
            <button className="under_btn" onClick={moveToPage}>{props.button_title}</button>
        </div>);
    
}

export default UnderButton;
