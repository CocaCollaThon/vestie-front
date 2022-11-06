import './under_button_style.css'

export const UnderButton = (props) => {
    const moveToPage = () => {
        window.location.href = "/" + props.next_page;
    }

    return (
        <div className="under_btn_box">
            <button className="under_btn" onClick={(props.state =="notMove") ? props.action : moveToPage}>{props.button_title}</button>
        </div>
    );
}
export default UnderButton;
