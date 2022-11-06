import "./style.css";

export const CircleButton = ({acting, text, color = "blue"}) => {
    // const onClickAction = (e)=>{
    //     acting;
    //     clickButton(e);
    // };
    return (
        <div>
            <div className="gender_button" onClick={acting}>
                <div className="gender_button_box">
                    <div className={color + " button"}></div>
                </div>
                <span className="gender_text unselect">
                {text}
            </span>
            </div>
        </div>
    );
}

const clickButton = (e) => {
    let children = e.currentTarget.parentNode.parentNode.children;
    
    for (let i = 1; i >= 0; i--) {
        let button = children[i].children[0].children[0].children[0];
        button.parentNode.nextSibling.setAttribute("class", "gender_text unselect");
        let attribute = button.getAttribute("class");
        let attrStr = attribute.toString();
        attrStr = attrStr.replaceAll("checkmark", "button");
        button.setAttribute("class", attrStr);
    }

    const button = e.currentTarget.children[0].children[0];
        button.parentNode.nextSibling.setAttribute("class", "gender_text select");
        let attribute = button.getAttribute("class");
        let attrStr = attribute.toString();
        attrStr = attrStr.includes("button")
        ? attrStr.replaceAll("button", "checkmark")
        : attrStr.replaceAll("checkmark", "button");

    button.setAttribute("class", attrStr);
}
export default CircleButton;
