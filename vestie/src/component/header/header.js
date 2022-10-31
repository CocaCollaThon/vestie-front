import "./header.css";

export const Header = () => {
    return <HeaderComponent></HeaderComponent>;
}

const HeaderComponent = () => {
    const moveToMain = () => {
        window.location.href = "/";
    }

    return (
        <div className="vestie_header">
            <div className="button_div"></div>
            <div className="title_div" onClick={moveToMain}>
                <span>vestie</span>
            </div>
        </div>
    );
}

export default Header;
