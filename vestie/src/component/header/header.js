import {Component} from "react";
import './header.css';

export class Header extends Component {
    render() {
        return <HeaderComponent></HeaderComponent>
    }
}


class HeaderComponent extends Component {
    render() {
        return (
            <div className="vestie_header">
            </div>
        )
    }
}